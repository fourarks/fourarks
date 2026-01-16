
import React, { useRef, useEffect } from 'react';

interface HeroProps {
  trustBadge?: {
    text: string;
    icons?: string[];
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

const useShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  class WebGLRenderer {
    private canvas: HTMLCanvasElement;
    private gl: WebGL2RenderingContext;
    private program: WebGLProgram | null = null;
    private vs: WebGLShader | null = null;
    private fs: WebGLShader | null = null;
    private buffer: WebGLBuffer | null = null;
    private scale: number;
    private shaderSource: string;
    private mouseMove = [0, 0];
    private mouseCoords = [0, 0];
    private pointerCoords = new Float32Array(20).fill(0);
    private nbrOfPointers = 0;

    private vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

    private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

    constructor(canvas: HTMLCanvasElement, scale: number) {
      this.canvas = canvas;
      this.scale = scale;
      this.gl = canvas.getContext('webgl2', { antialias: true })!;
      this.shaderSource = defaultShaderSource;
    }

    updateScale(scale: number) {
      this.scale = scale;
      const w = this.canvas.clientWidth * scale;
      const h = this.canvas.clientHeight * scale;
      this.canvas.width = w;
      this.canvas.height = h;
      this.gl.viewport(0, 0, w, h);
    }

    compile(shader: WebGLShader, source: string) {
      const gl = this.gl;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compilation error:', gl.getShaderInfoLog(shader));
      }
    }

    setup() {
      const gl = this.gl;
      this.vs = gl.createShader(gl.VERTEX_SHADER)!;
      this.fs = gl.createShader(gl.FRAGMENT_SHADER)!;
      this.compile(this.vs, this.vertexSrc);
      this.compile(this.fs, this.shaderSource);
      this.program = gl.createProgram()!;
      gl.attachShader(this.program, this.vs);
      gl.attachShader(this.program, this.fs);
      gl.linkProgram(this.program);
    }

    init() {
      const gl = this.gl;
      const program = this.program!;
      this.buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
      const position = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      (program as any).resolution = gl.getUniformLocation(program, 'resolution');
      (program as any).time = gl.getUniformLocation(program, 'time');
      (program as any).move = gl.getUniformLocation(program, 'move');
      (program as any).touch = gl.getUniformLocation(program, 'touch');
      (program as any).pointerCount = gl.getUniformLocation(program, 'pointerCount');
      (program as any).pointers = gl.getUniformLocation(program, 'pointers');
    }

    render(now = 0) {
      const gl = this.gl;
      const program = this.program;
      if (!program) return;
      gl.clearColor(0.176, 0.078, 0.039, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f((program as any).resolution, this.canvas.width, this.canvas.height);
      gl.uniform1f((program as any).time, now * 1e-3);
      gl.uniform2f((program as any).move, this.mouseMove[0], this.mouseMove[1]);
      gl.uniform2f((program as any).touch, this.mouseCoords[0], this.mouseCoords[1]);
      gl.uniform1i((program as any).pointerCount, this.nbrOfPointers);
      gl.uniform2fv((program as any).pointers, this.pointerCoords);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    reset() {
      const gl = this.gl;
      if (this.program) {
        gl.deleteShader(this.vs!);
        gl.deleteShader(this.fs!);
        gl.deleteProgram(this.program);
        gl.deleteBuffer(this.buffer!);
      }
    }
  }

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const dpr = Math.min(window.devicePixelRatio, 2);
    const renderer = new WebGLRenderer(canvas, dpr);

    renderer.setup();
    renderer.init();

    const resize = () => {
      renderer.updateScale(dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    const loop = (now: number) => {
      renderer.render(now);
      animationFrameRef.current = requestAnimationFrame(loop);
    };
    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      renderer.reset();
    };
  }, []);

  return canvasRef;
};

const AnimatedShaderHero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = ""
}) => {
  const canvasRef = useShaderBackground();

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-chocolate ${className}`}>
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover touch-none"
        style={{ background: '#2D140A' }}
      />

      <div className="absolute mt-5 inset-0 z-10 flex flex-col items-center justify-center text-offwhite text-center px-6 max-w-5xl mx-auto pointer-events-none">
        {trustBadge && (
          <div className="mb-5 animate-fade-in-down">
            <div className="flex items-center gap-3 px-6 py-3 bg-ivory/10 backdrop-blur-xl border border-ivory/30 rounded-full text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-ivory">
              {trustBadge.icons && (
                <div className="flex">
                  {trustBadge.icons.map((icon, index) => (
                    <span key={index} className="mr-1">{icon}</span>
                  ))}
                </div>
              )}
              {trustBadge.text}
            </div>
          </div>
        )}

        <div className="space-y-6 pointer-events-auto">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-[clamp(2.5rem,6vw,4.5rem)] font-serif leading-none tracking-tight bg-linear-to-r from-offwhite via-ivory to-offwhite bg-clip-text text-transparent animate-fade-in-up delay-200">
              {headline.line1}
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-[clamp(3.5rem,8vw,7.5rem)] font-black uppercase tracking-tighter leading-[0.85] text-offwhite animate-fade-in-up delay-400">
              {headline.line2}
              {/* <span className="block h-2 md:h-3 w-48 bg-ivory mt-6 mx-auto shadow-[0_0_30px_rgba(185,122,75,0.4)]"></span> */}
            </h1>
          </div>

          <div className="animate-fade-in-up delay-600">
            <p className="text-lg md:text-xl text-offwhite/60 font-light leading-relaxed mt-10 max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>

          {buttons && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10 animate-fade-in-up delay-800">
              {buttons.primary && (
                <button
                  onClick={buttons.primary.onClick}
                  className="px-12 py-6 bg-ivory text-chocolate font-black text-xs uppercase tracking-[0.4em] hover:bg-offwhite transition-all duration-300 active:scale-95 shadow-2xl"
                >
                  {buttons.primary.text}
                </button>
              )}
              {buttons.secondary && (
                <button
                  onClick={buttons.secondary.onClick}
                  className="px-12 py-6 bg-offwhite/5 hover:bg-offwhite/10 border border-offwhite/20 text-offwhite font-black text-xs uppercase tracking-[0.4em] transition-all duration-300 active:scale-95 backdrop-blur-sm"
                >
                  {buttons.secondary.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const defaultShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 move;
uniform vec2 touch;
uniform int pointerCount;
uniform vec2 pointers[10];

#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}

float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float a=rnd(i), b=rnd(i+vec2(1,0)), c=rnd(i+vec2(0,1)), d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}

float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}

float clouds(vec2 p) {
	float d=1., t=.0;
	for (float i=.0; i<3.; i++) {
		float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
		t=mix(t,d,a);
		d=a;
		p*=2./(i+1.);
	}
	return t;
}

void main(void) {
	vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
	vec3 col=vec3(0);
	float bg=clouds(vec2(st.x+T*.2,-st.y));
	uv*=1.-.2*(sin(T*.1)*.5+.5);
	for (float i=1.; i<10.; i++) {
		uv+=.12*cos(i*vec2(.12+.01*i, .75)+i*i+T*.3+.1*uv.x);
		vec2 p=uv;
		float d=length(p);
		col+=.0015/d*(cos(sin(i)*vec3(1,1.5,2.5))+1.2);
		float b=noise(i+p+bg*1.5);
		col+=.0018*b/length(max(p,vec2(b*p.x*.03,p.y)));
		col=mix(col,vec3(bg*.18,bg*.08,bg*.04),d*0.5);
	}
    vec3 brandBase = vec3(0.176, 0.078, 0.039); 
	O=vec4(mix(brandBase, col, 0.8),1);
}`;

export default AnimatedShaderHero;
