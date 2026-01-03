import HeroSection from '@/components/HeroSection';
import DestinationSection from '@/components/DestinationSection';
import FooterSection from '@/components/FooterSection';

const destinations = [
  {
    title: "Delhi",
    subtitle: "The Gateway",
    description: "We begin in India's vibrant capital - we'll explore the historic Red Fort, wander through bustling streets, smell incredible street food, and much more ...",
    dates: "Day 1–2",
    imageSrc: "redFortAnimated.jpg",
  },
  {
    title: "Agra",
    subtitle: "Eternal Love",
    description: "Witness the breathtaking Taj Mahal at sunrise – the world's best wonder. We'll immerse ourselves in Mughal history.",
    dates: "Day 3–4",
    imageSrc: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=80",
  },
  {
    title: "Jaipur",
    subtitle: "The Pink City",
    description: "Get ready for stunning palaces, vibrant bazaars, and incredible Rajasthani cuisine.Hawa Mahal, Amber Fort,  and the City Palace await us.",
    dates: "Day 5–6",
    imageSrc: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=80",
  },
  {
    title: "Jabalpur",
    subtitle: "My mum's hometown",
    description: "Relax in rural India, sleep under the stars on the family farm (pictured) and refresh in the serene ghats along the Narmada.",
    dates: "Day 7-8",
    imageSrc: "jabalpur.jpg",
  }
];

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection
        title="India"
        subtitle="The adventure awaits"
        // backgroundImage="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
        backgroundImage="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80"
      />

      {destinations.map((destination, index) => (
        <DestinationSection
          key={destination.title}
          {...destination}
          isFirst={index === 0}
        />
      ))}

      <FooterSection message="Early November - Are you ready?" />
    </main>
  );
};

export default Index;
