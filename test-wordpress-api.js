// Test WordPress API connection
const testWordPressAPI = async () => {
  try {
    console.log('Testing WordPress API connection...')
    
    const response = await fetch('https://blog.gamma-iptv.com/wp-json/wp/v2/posts?per_page=1')
    
    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))
    
    if (response.ok) {
      const data = await response.json()
      console.log('API is working! Sample post:', data[0]?.title?.rendered || 'No posts found')
      return true
    } else {
      console.error('API request failed:', response.statusText)
      return false
    }
  } catch (error) {
    console.error('WordPress API connection failed:', error.message)
    return false
  }
}

// Test the connection
testWordPressAPI()
