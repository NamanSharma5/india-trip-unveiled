import HeroSection from '@/components/HeroSection';
import DestinationSection from '@/components/DestinationSection';
import FooterSection from '@/components/FooterSection';

// Placeholder destinations - replace images/videos with your own!
const destinations = [
  {
    title: "Delhi",
    subtitle: "The Gateway",
    description: "Our journey begins in India's vibrant capital. We'll explore the historic Red Fort, wander through the bustling streets of Old Delhi, and savor incredible street food.",
    dates: "Day 1–2",
    imageSrc: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80",
  },
  {
    title: "Agra",
    subtitle: "Eternal Love",
    description: "Witness the breathtaking Taj Mahal at sunrise – one of the world's most iconic monuments. We'll also explore Agra Fort and immerse ourselves in Mughal history.",
    dates: "Day 3–4",
    imageSrc: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=80",
  },
  {
    title: "Jaipur",
    subtitle: "The Pink City",
    description: "Get ready for stunning palaces, vibrant bazaars, and incredible Rajasthani cuisine. Amber Fort, Hawa Mahal, and the City Palace await us.",
    dates: "Day 5–7",
    imageSrc: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=80",
  },
  {
    title: "Varanasi",
    subtitle: "The Spiritual Heart",
    description: "Experience the magic of the Ganges at dawn. We'll witness the famous Ganga Aarti ceremony and explore one of the world's oldest living cities.",
    dates: "Day 8–10",
    imageSrc: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1920&q=80",
  },
  {
    title: "Kerala",
    subtitle: "God's Own Country",
    description: "Our final stop takes us to the lush backwaters of Kerala. We'll cruise on a traditional houseboat, enjoy Ayurvedic treatments, and relax on pristine beaches.",
    dates: "Day 11–14",
    imageSrc: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80",
  },
];

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection 
        title="India"
        subtitle="An adventure awaits"
        backgroundImage="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
      />
      
      {destinations.map((destination, index) => (
        <DestinationSection
          key={destination.title}
          {...destination}
          isFirst={index === 0}
        />
      ))}
      
      <FooterSection message="Can't wait to explore India with you!" />
    </main>
  );
};

export default Index;
