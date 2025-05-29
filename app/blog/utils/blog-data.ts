import type { BlogPost, Category } from '@/app/blog/types/blog';

// All blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Ancient Art of Japanese Head Spa: A Journey Through Time",
    excerpt: "Discover the rich history and traditional techniques of Japanese head spa treatments that have been passed down through generations...",
    date: "2024-01-19",
    category: "Traditional Techniques",
    readingTime: "5 min read",
    image: "/blog/japanese-head-spa.svg",
    slug: "japanese-head-spa-history",
    content: `
      <p class="text-lg border-l-4 border-teal-600 pl-4 mb-8 text-gray-800">
        The Japanese head spa tradition dates back centuries, originating in the temples of Kyoto where monks developed specialized techniques for relaxation and spiritual well-being. Today, these ancient practices have evolved into modern therapeutic treatments that combine traditional wisdom with contemporary wellness approaches.
      </p>

      <section class="border-2 border-black p-6 spa-shadow bg-white mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black mb-4 underline decoration-teal-600">The Origins of Head Spa</h2>
        <p class="text-gray-800 mb-4">
          Japanese head spa treatments began as a form of temple therapy, where monks would use specific pressure points and massage techniques to promote mental clarity and spiritual connection. These practices were closely guarded secrets passed down through generations of temple healers.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">Historical Timeline</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>8th Century: First documented head massage techniques in Buddhist temples</li>
              <li>12th Century: Development of specialized pressure point therapy</li>
              <li>16th Century: Integration of herbal treatments and steam therapy</li>
              <li>19th Century: Modern adaptation of traditional techniques</li>
              <li>20th Century: Scientific research and global recognition</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">Cultural Significance</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Spiritual connection and meditation</li>
              <li>Traditional healing practices</li>
              <li>Beauty and wellness rituals</li>
              <li>Social and cultural bonding</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="border-2 border-black p-6 spa-shadow bg-white mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black mb-4 underline decoration-teal-600">Traditional Techniques</h2>
        <p class="text-gray-800 mb-4">
          The core of Japanese head spa lies in its unique combination of techniques that have been refined over centuries:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">Ancient Methods</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Amma (Traditional Japanese Massage)</li>
              <li>Shiatsu Pressure Point Therapy</li>
              <li>Herbal Steam Treatments</li>
              <li>Scalp Acupressure</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">Modern Adaptations</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Advanced Scalp Analysis</li>
              <li>Customized Treatment Protocols</li>
              <li>Scientific Research Integration</li>
              <li>Contemporary Wellness Practices</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="border-2 border-black p-6 spa-shadow bg-white mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black mb-4 underline decoration-teal-600">The Evolution of Head Spa</h2>
        <div class="space-y-6">
          <div>
            <h3 class="font-bold text-xl mb-2">Temple Origins</h3>
            <p class="text-gray-800 mb-4">
              In ancient Japanese temples, head spa treatments were initially developed as a form of spiritual practice. Monks discovered that specific massage techniques could enhance meditation and promote mental clarity. These early practices focused on:
            </p>
            <ul class="list-disc pl-5 space-y-2">
              <li>Energy flow through meridians</li>
              <li>Spiritual connection and mindfulness</li>
              <li>Natural healing through touch</li>
              <li>Herbal medicine integration</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-xl mb-2">Samurai Era Influence</h3>
            <p class="text-gray-800 mb-4">
              During the Samurai period (1185-1868), head spa techniques were adapted for warriors to:
            </p>
            <ul class="list-disc pl-5 space-y-2">
              <li>Relieve stress from battle preparation</li>
              <li>Enhance mental focus and clarity</li>
              <li>Promote physical recovery</li>
              <li>Maintain peak performance</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-xl mb-2">Modern Transformation</h3>
            <p class="text-gray-800 mb-4">
              The 20th century saw significant evolution in head spa practices:
            </p>
            <ul class="list-disc pl-5 space-y-2">
              <li>Integration of Western massage techniques</li>
              <li>Development of specialized equipment</li>
              <li>Scientific research and validation</li>
              <li>Global recognition and adaptation</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="border-2 border-black p-6 spa-shadow bg-white mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black mb-4 underline decoration-teal-600">Traditional Ingredients & Tools</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">Natural Ingredients</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Camellia Oil (Tsubaki)</li>
              <li>Green Tea Extracts</li>
              <li>Rice Bran</li>
              <li>Seaweed Extracts</li>
              <li>Traditional Herbs</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">Traditional Tools</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Bamboo Combs</li>
              <li>Wooden Massage Tools</li>
              <li>Herbal Steam Equipment</li>
              <li>Traditional Towels</li>
            </ul>
          </div>
        </div>
      </section>

      <div class="bg-teal-50 border-2 border-teal-600 p-6 rounded-lg mb-8">
        <h3 class="text-xl font-bold text-teal-800 mb-4">Preserving Tradition in Modern Times</h3>
        <p class="text-teal-900 mb-4">
          Today's head spa treatments maintain the essence of traditional Japanese practices while incorporating modern wellness approaches. This fusion creates a unique experience that honors centuries of wisdom while meeting contemporary needs.
        </p>
        <ul class="list-disc pl-5 space-y-2 text-teal-900">
          <li>Certified practitioners trained in traditional techniques</li>
          <li>Authentic Japanese products and tools</li>
          <li>Modern comfort and convenience</li>
          <li>Scientific validation of benefits</li>
        </ul>
      </div>
    `,
  },
  {
    id: "2",
    title: "5 Benefits of Regular Head Spa Treatments",
    excerpt: "Learn how regular head spa sessions can improve your overall well-being, from stress relief to better sleep quality.",
    date: "2024-03-10",
    category: "Wellness Benefits",
    readingTime: "4 min read",
    image: "/blog/head-spa-treatment.svg",
    slug: "head-spa-benefits",
    content: `
      <div class="mb-10">
        <p class="text-lg mb-4">
          Regular head spa treatments offer numerous benefits for both physical and mental well-being. From stress reduction to improved sleep quality, these therapeutic sessions can significantly enhance your overall quality of life. Let's explore the science-backed benefits and how they can transform your wellness journey.
        </p>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-8 -left-8 bg-teal-600 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Benefit #1</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white spa-shadow">
            Stress Relief & Relaxation
          </h2>
        </div>
        <p class="mb-4">
          The gentle pressure and massage techniques used in head spa treatments help release tension in the scalp and neck muscles, promoting deep relaxation and reducing stress levels. Scientific studies have shown that regular scalp massage can:
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Lower cortisol levels by up to 31%</li>
          <li>Increase serotonin and dopamine production</li>
          <li>Reduce muscle tension in the neck and shoulders</li>
          <li>Improve overall mood and emotional well-being</li>
        </ul>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <h3 class="font-bold text-lg mb-2">How It Works</h3>
          <p>The treatment stimulates the parasympathetic nervous system, triggering the body's natural relaxation response and promoting a state of calm and tranquility.</p>
        </div>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-8 -left-8 bg-teal-600 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Benefit #2</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white retro-shadow">
            Improved Sleep Quality
          </h2>
        </div>
        <p class="mb-4">
          Regular head spa sessions can help regulate sleep patterns by reducing stress and promoting relaxation, leading to better quality sleep and increased energy levels during the day. Research indicates that:
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>85% of clients report improved sleep quality</li>
          <li>Average sleep duration increases by 1-2 hours</li>
          <li>Reduced instances of sleep disturbances</li>
          <li>More consistent sleep patterns</li>
        </ul>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <h3 class="font-bold text-lg mb-2">Sleep Enhancement Techniques</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Aromatherapy with sleep-promoting essential oils</li>
            <li>Gentle scalp massage to release tension</li>
            <li>Guided breathing exercises</li>
            <li>Temperature-controlled treatments</li>
          </ul>
        </div>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-8 -left-8 bg-teal-600 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Benefit #3</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white spa-shadow">
            Enhanced Blood Circulation
          </h2>
        </div>
        <p class="mb-4">
          The massage techniques used in head spa treatments stimulate blood flow to the scalp, promoting healthier hair growth and improved oxygen delivery to the brain. This enhanced circulation:
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Increases nutrient delivery to hair follicles</li>
          <li>Promotes natural hair growth</li>
          <li>Improves scalp health and condition</li>
          <li>Enhances cognitive function and mental clarity</li>
        </ul>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <h3 class="font-bold text-lg mb-2">Scientific Evidence</h3>
          <p>Studies show that regular scalp massage can increase blood flow by up to 40%, leading to improved hair follicle health and overall scalp condition.</p>
        </div>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-8 -left-8 bg-teal-600 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Benefit #4</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white spa-shadow">
            Natural Hair Growth & Health
          </h2>
        </div>
        <p class="mb-4">
          Regular head spa treatments can significantly improve hair health and promote natural growth through:
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Stimulation of hair follicles</li>
          <li>Removal of product buildup</li>
          <li>Balanced scalp oil production</li>
          <li>Improved hair strength and elasticity</li>
        </ul>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <h3 class="font-bold text-lg mb-2">Treatment Components</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Deep cleansing treatments</li>
            <li>Nutrient-rich hair masks</li>
            <li>Scalp exfoliation</li>
            <li>Natural oil treatments</li>
          </ul>
        </div>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-8 -left-8 bg-teal-600 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Benefit #5</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white spa-shadow">
            Mental Clarity & Focus
          </h2>
        </div>
        <p class="mb-4">
          Head spa treatments can significantly improve mental clarity and focus through:
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Reduced mental fatigue</li>
          <li>Improved concentration</li>
          <li>Enhanced cognitive function</li>
          <li>Better stress management</li>
        </ul>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <h3 class="font-bold text-lg mb-2">How It Enhances Mental Performance</h3>
          <p>The combination of massage, aromatherapy, and relaxation techniques helps clear mental fog and improve overall brain function, leading to better productivity and mental well-being.</p>
        </div>
      </div>

      <section class="border-2 border-black p-6 spa-shadow bg-white mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black mb-4 underline decoration-teal-600">Maximizing Your Treatment Benefits</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">Frequency Recommendations</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Beginner: Every 4-6 weeks</li>
              <li>Regular: Every 2-3 weeks</li>
              <li>Maintenance: Monthly sessions</li>
              <li>Intensive care: Weekly sessions (as needed)</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">Home Care Tips</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Use recommended hair care products</li>
              <li>Practice daily scalp massage</li>
              <li>Maintain a healthy diet</li>
              <li>Stay hydrated</li>
            </ul>
          </div>
        </div>
      </section>

      <div class="bg-teal-50 border-2 border-teal-600 p-6 rounded-lg mb-8">
        <h3 class="text-xl font-bold text-teal-800 mb-4">Expert Tips for Optimal Results</h3>
        <ul class="list-disc pl-5 space-y-2 text-teal-900">
          <li>Schedule regular sessions for consistent benefits</li>
          <li>Communicate any specific concerns with your therapist</li>
          <li>Follow post-treatment care instructions</li>
          <li>Maintain a consistent self-care routine</li>
          <li>Stay hydrated before and after treatments</li>
          <li>Practice stress management techniques between sessions</li>
        </ul>
      </div>
    `
  },
  {
    id: "3",
    title: "Understanding Different Types of Head Spa Treatments",
    excerpt: "Explore the various types of head spa treatments available and find the perfect one for your needs.",
    date: "2025-05-20",
    category: "Treatment Types",
    readingTime: "6 min read",
    image: "/blog/well-being.svg",
    slug: "head-spa-treatments",
    content: `
      <div class="mb-10">
        <p class="text-lg mb-4">
          At our spa, we offer a variety of head spa treatments, each designed to address specific needs and provide unique benefits. Understanding these different types can help you choose the perfect treatment for your wellness journey. Our innovative approach combines traditional head spa techniques with therapeutic massage, creating a comprehensive wellness experience that addresses both physical and mental well-being.
        </p>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-8 -left-8 bg-teal-600 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Treatment #1</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white spa-shadow">
            Traditional Japanese Head Spa with Full-Body Massage
          </h2>
        </div>
        <p class="mb-4">
          Our signature treatment combines ancient Japanese techniques with modern wellness practices. This comprehensive session includes:
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Scalp analysis and consultation</li>
          <li>Deep cleansing treatment</li>
          <li>Traditional massage techniques</li>
          <li>Herbal steam therapy</li>
          <li>Full-body Swedish massage for complete relaxation</li>
          <li>Neck and shoulder tension release</li>
        </ul>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-8 -left-8 bg-teal-600 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Treatment #2</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white spa-shadow">
            Stress Relief Head Spa & Deep Tissue Massage
          </h2>
        </div>
        <p class="mb-4">
          Specifically designed for those experiencing high levels of stress, this treatment focuses on:
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Pressure point therapy</li>
          <li>Aromatherapy integration</li>
          <li>Neck and shoulder tension release</li>
          <li>Guided breathing exercises</li>
          <li>Deep tissue massage for chronic tension</li>
          <li>Targeted muscle release techniques</li>
        </ul>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-8 -left-8 bg-teal-600 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Treatment #3</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white spa-shadow">
            The Complete Wellness Experience
          </h2>
        </div>
        <p class="mb-4">
          Our most comprehensive treatment combines the best of both worlds:
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Full-body therapeutic massage</li>
          <li>Traditional Japanese head spa techniques</li>
          <li>Scalp and facial treatments</li>
          <li>Hot stone therapy</li>
          <li>Aromatherapy with essential oils</li>
          <li>Guided meditation session</li>
        </ul>
      </div>

      <section class="border-2 border-black p-6 spa-shadow bg-white mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black mb-4 underline decoration-teal-600">Benefits of Combined Treatments</h2>
        <p class="text-gray-800 mb-4">
          When you combine head spa treatments with massage therapy, you experience:
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Enhanced relaxation and stress relief</li>
          <li>Improved blood circulation throughout the body</li>
          <li>Better sleep quality and patterns</li>
          <li>Reduced muscle tension and pain</li>
          <li>Increased mental clarity and focus</li>
          <li>Healthier hair and scalp condition</li>
        </ul>
      </section>

      <div class="bg-teal-50 border-2 border-teal-600 p-6 rounded-lg mb-8">
        <h3 class="text-xl font-bold text-teal-800 mb-4">Expert Tips for Maximum Benefits</h3>
        <ul class="list-disc pl-5 space-y-2 text-teal-900">
          <li>Schedule regular sessions (every 2-4 weeks) for optimal results</li>
          <li>Stay hydrated before and after treatments</li>
          <li>Practice mindfulness between sessions</li>
          <li>Maintain a consistent self-care routine at home</li>
        </ul>
      </div>
    `
  }
];

// Generate categories from blog posts
export const getCategories = (): Category[] => {
  const categoryMap = new Map<string, number>();
  
  blogPosts.forEach(post => {
    const currentCount = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, currentCount + 1);
  });
  
  return Array.from(categoryMap.entries()).map(([name, count]) => ({ name, count }));
};

// Get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

// Get a single blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
}; 