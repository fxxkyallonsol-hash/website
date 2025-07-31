import React from 'react';
import { Zap, TrendingUp, Coins, Twitter, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ aspectRatio: '1366/768' }}>
      {/* Background Effects */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/public/Untitled design (12).png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
          Welcome,
          <br />
          <span className="text-white drop-shadow-2xl">
            FxxK Ÿall
          </span>
        </h1>
        
        {/* Subtitle */}
        <div className="text-orange-100 text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          <p className="mb-2 text-white font-semibold">909 FxxK Ÿall NFTs</p>
          <p className="text-orange-300">
            $FŸALL: <span className="text-green-400 font-semibold">(Launching at the same time Soon)</span>
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-black/30 backdrop-blur-md border border-orange-500/30 rounded-xl p-5 hover:bg-black/40 transition-all duration-300 hover:scale-105 hover:border-orange-500/50">
            <Zap className="w-8 h-8 text-orange-400 mb-4 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">Limited Edition</h3>
            <p className="text-orange-200 text-sm">Only 909 unique NFTs in existence</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-md border border-red-500/30 rounded-xl p-5 hover:bg-black/40 transition-all duration-300 hover:scale-105 hover:border-red-500/50">
            <TrendingUp className="w-8 h-8 text-red-400 mb-4 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">Revolutionary Art</h3>
            <p className="text-orange-200 text-sm">Breaking boundaries in digital expression</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-md border border-yellow-500/30 rounded-xl p-5 hover:bg-black/40 transition-all duration-300 hover:scale-105 hover:border-yellow-500/50">
            <Coins className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">$FŸALL Token</h3>
            <p className="text-orange-200 text-sm">Exclusive utility token coming soon. Launching on <span className="text-green-400">Jupiter Studio</span>.</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a 
            href="https://discord.gg/hrUbsnVyek" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 inline-block"
          >
            Join the Revolution
          </a>
          <a 
            href="https://x.com/fxxkyallonsol?s=21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-orange-400/50 hover:border-orange-400/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-orange-500/20 hover:scale-105 inline-block"
          >
            Learn More
          </a>
        </div>
        
        {/* Official Links Section */}
        <div className="mb-8">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center justify-center gap-2">
            📡 Official Links
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://x.com/fxxkyallonsol?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-blue-500/30 hover:border-blue-500/60 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-black/50 hover:scale-105"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a 
              href="https://discord.gg/hrUbsnVyek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-black/50 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Discord</span>
            </a>
          </div>
        </div>
        
        {/* Coming Soon Badge */}
        <div>
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-yellow-300 font-semibold text-sm">LAUNCHING SOON</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
    </div>
  );
}

export default App;