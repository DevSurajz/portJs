import React, { useState, useEffect } from 'react'
import { Search, Sparkles, Globe, Users, Code, BookOpen, Heart, Briefcase, GraduationCap, Palette, DollarSign, Zap, TrendingUp, ExternalLink } from 'lucide-react'

function NeoThreads() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const categories = [
    { name: 'Tech', icon: Code, color: 'from-blue-500 to-cyan-500', query: 'technology solutions' },
    { name: 'Health', icon: Heart, color: 'from-pink-500 to-rose-500', query: 'health and wellness' },
    { name: 'Business', icon: Briefcase, color: 'from-purple-500 to-indigo-500', query: 'business strategies' },
    { name: 'Education', icon: GraduationCap, color: 'from-emerald-500 to-teal-500', query: 'educational resources' },
    { name: 'Lifestyle', icon: Sparkles, color: 'from-yellow-500 to-orange-500', query: 'lifestyle tips' },
    { name: 'Science', icon: Globe, color: 'from-green-500 to-emerald-500', query: 'scientific research' },
    { name: 'Art', icon: Palette, color: 'from-pink-500 to-purple-500', query: 'art and creativity' },
    { name: 'Finance', icon: DollarSign, color: 'from-green-500 to-lime-500', query: 'financial advice' }
  ]

  const trendingTopics = [
    { name: 'AI & Machine Learning', emoji: '🤖', query: 'artificial intelligence machine learning' },
    { name: 'Climate Solutions', emoji: '🌱', query: 'climate change solutions' },
    { name: 'Remote Work', emoji: '💻', query: 'remote work productivity' },
    { name: 'Mental Health', emoji: '🧠', query: 'mental health wellness' },
    { name: 'Crypto & Web3', emoji: '₿', query: 'cryptocurrency blockchain' },
    { name: 'Space Exploration', emoji: '🚀', query: 'space exploration technology' }
  ]

  const searchPlatforms = [
    {
      name: 'Google Search',
      description: 'Comprehensive web results and information',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600',
      url: 'https://www.google.com/search?q='
    },
    {
      name: 'YouTube',
      description: 'Video tutorials and educational content',
      icon: 'YT',
      color: 'from-red-500 to-red-600',
      url: 'https://www.youtube.com/results?search_query='
    },
    {
      name: 'Reddit',
      description: 'Community discussions and real experiences',
      icon: 'R',
      color: 'from-orange-500 to-orange-600',
      url: 'https://www.reddit.com/search/?q='
    },
    {
      name: 'Stack Overflow',
      description: 'Expert answers for technical questions',
      icon: 'SO',
      color: 'from-yellow-500 to-orange-500',
      url: 'https://stackoverflow.com/search?q='
    },
    {
      name: 'Twitter/X',
      description: 'Real-time discussions and trending topics',
      icon: 'X',
      color: 'from-blue-400 to-blue-500',
      url: 'https://twitter.com/search?q='
    },
    {
      name: 'Medium',
      description: 'In-depth articles and expert insights',
      icon: 'M',
      color: 'from-green-500 to-green-600',
      url: 'https://medium.com/search?q='
    },
    {
      name: 'DuckDuckGo',
      description: 'Privacy-focused search results',
      icon: 'DD',
      color: 'from-yellow-400 to-yellow-500',
      url: 'https://duckduckgo.com/?q='
    },
    {
      name: 'GitHub',
      description: 'Code solutions and open source projects',
      icon: 'GH',
      color: 'from-gray-600 to-gray-800',
      url: 'https://github.com/search?q='
    }
  ]

  const features = [
    {
      title: 'Multi-Platform Search',
      description: 'Access 8+ search platforms from one interface',
      icon: Globe
    },
    {
      title: 'Instant Access',
      description: 'Get results instantly across all platforms',
      icon: Zap
    },
    {
      title: 'Diverse Perspectives',
      description: 'Find solutions from multiple viewpoints',
      icon: Users
    }
  ]

  // Typing animation effect
  useEffect(() => {
    if (isTyping && query) {
      let i = 0
      setTypingText('')
      const timer = setInterval(() => {
        if (i < query.length) {
          setTypingText(query.slice(0, i + 1))
          i++
        } else {
          setIsTyping(false)
          clearInterval(timer)
        }
      }, 50)
      return () => clearInterval(timer)
    }
  }, [isTyping, query])

  // Handle search function that generates result array
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery)
    setLoading(true)
    setIsTyping(true)
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setResults(searchPlatforms)
      setLoading(false)
      setSearchPerformed(true)
    }, 800)
  }

  const handleCategoryClick = (category) => {
    handleSearch(category.query)
  }

  const handleTrendingClick = (topic) => {
    handleSearch(topic.query)
  }

  const openSearch = (platform, searchQuery) => {
    const encodedQuery = encodeURIComponent(searchQuery)
    window.open(`${platform.url}${encodedQuery}`, '_blank')
  }

  // Reset search state
  const resetSearch = () => {
    setQuery('')
    setResults([])
    setSearchPerformed(false)
    setLoading(false)
    setTypingText('')
    setIsTyping(false)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
        
        {/* Floating 3D Shapes */}
        <div className="floating-shape top-20 left-10 w-16 h-16 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full animate-float"></div>
        <div className="floating-shape top-40 right-20 w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg animate-float-delayed"></div>
        <div className="floating-shape top-60 left-1/4 w-20 h-20 bg-gradient-to-r from-neon-emerald to-neon-cyan rounded-full animate-float-slow"></div>
        <div className="floating-shape bottom-40 right-1/3 w-14 h-14 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg animate-float"></div>
        <div className="floating-shape bottom-20 left-1/2 w-18 h-18 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full animate-float-delayed"></div>
        
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent animate-gradient"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 perspective-1000">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text animate-pulse-glow">
              Neo Threads
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-bounce-slow">
              Navigate Your Problems Through Multiple Dimensions
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-2xl mb-12">
            <div className="glass rounded-2xl p-2 shadow-neon-lg">
              <div className="flex items-center">
                <Search className="w-6 h-6 text-neon-cyan ml-4" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(query)}
                  placeholder="Search for solutions across multiple platforms..."
                  className="flex-1 bg-transparent text-white text-lg py-6 px-4 placeholder-gray-400 focus:outline-none"
                />
                <button
                  onClick={() => handleSearch(query)}
                  className="btn-primary mr-2 animate-pulse-glow"
                  disabled={loading}
                >
                  {loading ? 'Searching...' : 'Search'}
                </button>
              </div>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {['React tutorials', 'Python programming', 'Design inspiration', 'Business strategies'].map((term) => (
              <button
                key={term}
                onClick={() => handleSearch(term)}
                className="btn-secondary hover:shadow-neon"
              >
                {term}
              </button>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        {!searchPerformed && (
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 gradient-text-pink">
                Explore Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <div
                    key={category.name}
                    onClick={() => handleCategoryClick(category)}
                    className="card-3d glass-dark rounded-2xl p-6 text-center cursor-pointer group preserve-3d"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trending Topics */}
        {!searchPerformed && (
          <section className="py-20 px-4 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
                Trending Topics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={topic.name}
                    onClick={() => handleTrendingClick(topic)}
                    className="card-3d glass-dark rounded-xl p-6 cursor-pointer group preserve-3d border-2 border-transparent hover:border-neon-cyan/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {topic.emoji}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                      {topic.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search Results */}
        {searchPerformed && (
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 gradient-text">
                  Search Results for "{typingText || query}"
                </h2>
                <p className="text-gray-400 text-lg">
                  Explore solutions across multiple platforms
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                  <div className="col-span-full flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-cyan"></div>
                    <span className="ml-4 text-xl text-gray-300">Searching across platforms...</span>
                  </div>
                ) : (
                  results.map((platform, index) => (
                  <div
                    key={platform.name}
                    className="card-3d glass-dark rounded-2xl p-6 group preserve-3d hover:shadow-neon-lg transition-all duration-500"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{platform.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                        {platform.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {platform.description}
                    </p>
                    <button
                      onClick={() => openSearch(platform, query)}
                      className="w-full btn-primary flex items-center justify-center group-hover:shadow-neon-lg"
                    >
                      Explore
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                  ))
                )}
              </div>
              
              <div className="text-center mt-12">
                <button
                  onClick={resetSearch}
                  className="btn-secondary text-lg px-8 py-3"
                >
                  Back to Search
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {!searchPerformed && (
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
                Why Choose Neo Threads?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="glass-dark rounded-2xl p-8 text-center group hover:shadow-neon-lg transition-all duration-500"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-neon-cyan to-electric-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">Neo Threads</h3>
            <p className="text-gray-400">
              Navigate your problems through multiple dimensions
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default NeoThreads
