import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import SectionHeading from './SectionHeading';
import Button from './Button';

const AIStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage(reader.result as string);
        setResultImage(null);
        setStatus('Image loaded. Ready for prompt.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter a text prompt describing the edit or generation.");
      return;
    }
    
    setIsLoading(true);
    setStatus('Initializing Gemini 2.5 Flash...');
    setResultImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-2.5-flash-image';

      const parts: any[] = [];

      if (sourceImage) {
        const [metadata, base64Data] = sourceImage.split(',');
        const mimeType = metadata.match(/:(.*?);/)?.[1] || 'image/png';
        
        parts.push({
          inlineData: {
            mimeType,
            data: base64Data
          }
        });
      }

      parts.push({ text: prompt });

      setStatus('Processing visual data...');
      const response = await ai.models.generateContent({
        model,
        contents: { parts }
      });

      setStatus('Rendering final output...');
      const responseParts = response.candidates?.[0]?.content?.parts;
      if (responseParts) {
        let imageFound = false;
        for (const part of responseParts) {
          if (part.inlineData) {
            const mimeType = part.inlineData.mimeType || 'image/png';
            setResultImage(`data:${mimeType};base64,${part.inlineData.data}`);
            imageFound = true;
            break;
          }
        }
        if (!imageFound) {
           console.warn("No image found in response parts", responseParts);
           alert("The model processed your request but returned no image. Try a different prompt.");
        }
      }
    } catch (error) {
      console.error("Generation failed", error);
      alert("Generation failed. Please check your API quota or try again.");
    } finally {
      setIsLoading(false);
      setStatus('');
    }
  };

  return (
    <section id="ai-studio" className="py-24 bg-[#050914] relative overflow-hidden border-t border-white/5">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          subtitle="Prototyping" 
          title="AI Design Studio" 
          align="left"
        />
        
        <div className="grid lg:grid-cols-12 gap-8 mt-12">
          {/* Sidebar Controls */}
          <div className="lg:col-span-4 space-y-6">
             <div className="bg-[#0f172a] border border-white/10 rounded-xl p-6 shadow-2xl">
                <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-widest text-textSecondary mb-3">1. Source Asset</label>
                    <div 
                        onClick={() => fileInputRef.current?.click()}
                        className={`relative group h-48 border border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden ${sourceImage ? 'border-accent bg-accent/5' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
                    >
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleImageUpload} 
                            accept="image/*" 
                            className="hidden" 
                        />
                        {sourceImage ? (
                            <>
                                <img src={sourceImage} alt="Source" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="z-10 bg-black/50 px-3 py-1 rounded border border-white/20 backdrop-blur-sm">
                                    <span className="text-white text-xs font-bold">Replace Image</span>
                                </div>
                            </>
                        ) : (
                            <div className="text-center p-4">
                                <div className="w-10 h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center text-white/50 mb-3 group-hover:text-white group-hover:bg-accent/20 transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                </div>
                                <span className="text-sm text-textSecondary">Upload Reference</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-widest text-textSecondary mb-3">2. Directives</label>
                    <div className="relative">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Describe the desired transformation..."
                            className="w-full bg-[#020617] border border-white/10 rounded-lg p-4 text-white text-sm placeholder-textSecondary/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all h-32 resize-none leading-relaxed"
                        />
                        <div className="absolute bottom-3 right-3 text-[10px] text-textSecondary/50 font-mono">Gemini 2.5</div>
                    </div>
                </div>

                <Button 
                    onClick={handleGenerate} 
                    disabled={isLoading}
                    className={`w-full justify-center group ${isLoading ? 'opacity-75' : ''}`}
                >
                    {isLoading ? (
                         <span className="flex items-center gap-2">
                             <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                             Processing...
                         </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            <span>Generate Output</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </span>
                    )}
                </Button>
                
                {status && (
                    <div className="mt-4 p-3 bg-black/30 rounded border border-white/5">
                        <p className="text-xs font-mono text-accentCyan animate-pulse">> {status}</p>
                    </div>
                )}
             </div>
          </div>

          {/* Main Canvas */}
          <div className="lg:col-span-8">
             <div className="h-full bg-[#0f172a] rounded-xl border border-white/10 p-1 relative flex flex-col shadow-2xl overflow-hidden min-h-[500px]">
                {/* Canvas Toolbar */}
                <div className="h-10 border-b border-white/5 bg-[#020617] flex items-center justify-between px-4">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-textSecondary tracking-widest">Viewport // Preview</span>
                </div>

                <div className="flex-1 relative bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] flex items-center justify-center p-8">
                     {!resultImage && !isLoading && (
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/5 mb-4 backdrop-blur-sm">
                                <svg className="w-8 h-8 text-textSecondary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <h4 className="text-textSecondary font-medium">Ready to Create</h4>
                            <p className="text-textSecondary/40 text-sm mt-1">Upload an image or type a prompt to begin.</p>
                        </div>
                     )}

                     {isLoading && (
                         <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-md flex flex-col items-center justify-center z-20">
                             <div className="relative w-24 h-24">
                                 <div className="absolute inset-0 border-t-2 border-accent rounded-full animate-spin"></div>
                                 <div className="absolute inset-2 border-r-2 border-accentCyan rounded-full animate-spin reverse-spin"></div>
                                 <div className="absolute inset-4 border-b-2 border-accentPink rounded-full animate-spin"></div>
                             </div>
                             <p className="mt-6 text-white font-heading font-bold tracking-wider">GENERATING</p>
                         </div>
                     )}

                     {resultImage && (
                        <div className="relative w-full h-full flex items-center justify-center animate-[fadeIn_0.6s_cubic-bezier(0.16,1,0.3,1)]">
                            <div className="relative max-w-full max-h-full shadow-2xl rounded-lg overflow-hidden border border-white/10 group">
                                <img src={resultImage} alt="Generated Result" className="max-w-full max-h-[600px] object-contain" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                                     <a 
                                        href={resultImage} 
                                        download="4arks-studio-export.png"
                                        className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-white/20"
                                     >
                                        Download High-Res
                                     </a>
                                </div>
                            </div>
                        </div>
                     )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStudio;