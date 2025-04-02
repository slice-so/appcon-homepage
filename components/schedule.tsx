import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  type: 'workshop' | 'talk';
}

interface DaySchedule {
  date: string;
  theme: string;
  schedule: ScheduleItem[];
}

const scheduleData: DaySchedule[] = [
  {
    date: 'April 7',
    theme: 'Ethereum',
    schedule: [
      {
        time: '11:00 AM - 12:00 PM',
        title: 'Intro to Ethereum, technology and use cases',
        type: 'workshop',
      },
      {
        time: '4:30 PM - 5:30 PM',
        title: 'Debunk myths on cryptocurrencies',
        type: 'talk',
      },
      {
        time: '5:30 PM - 6:30 PM',
        title:
          'Beyond Speculation: Ethereum apps and an ecosystem for collective decision-making',
        type: 'talk',
      },
    ],
  },
  {
    date: 'April 8',
    theme: 'Commerce',
    schedule: [
      {
        time: '11:00 AM - 12:00 PM',
        title: 'How to sell onchain',
        description:
          'In collaboration with local merchants from the DUC merchants association',
        type: 'workshop',
      },
      {
        time: '4:30 PM - 5:30 PM',
        title: 'The future of commerce is on Ethereum',
        type: 'talk',
      },
      {
        time: '5:30 PM - 6:30 PM',
        title: 'Accept payments in cryptocurrencies',
        type: 'talk',
      },
    ],
  },
  {
    date: 'April 9',
    theme: 'Art and design',
    schedule: [
      {
        time: '11:00 AM - 12:00 PM',
        title: 'Onchain art and tokenization',
        type: 'workshop',
      },
      {
        time: '4:30 PM - 5:30 PM',
        title: 'Digitizing and Selling Your Creations on the Blockchain',
        type: 'talk',
      },
      {
        time: '5:30 PM - 6:30 PM',
        title: 'Art and Web3: Hype or Revolution?',
        type: 'talk',
      },
    ],
  },
  {
    date: 'April 10',
    theme: 'Social',
    schedule: [
      {
        time: '11:00 AM - 12:00 PM',
        title: 'Building a Digital Identity and a Web3 Profile on Farcaster',
        type: 'workshop',
      },
      {
        time: '4:30 PM - 5:30 PM',
        title: 'The Rise of Decentralized Social Networks',
        type: 'talk',
      },
      {
        time: '5:30 PM - 6:30 PM',
        title:
          'From Followers to DAO Members: The Future of Digital Participation',
        type: 'talk',
      },
    ],
  },
];

export function Schedule() {
  return (
    <section className="w-full py-16 bg-white/70">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#4A5568] to-[#805AD5] bg-clip-text text-transparent">
          Workshops & Talks
        </h2>

        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          On April 7-10, workshops take place in the morning (11 am-12 pm) while
          talks in the afternoon (4:30-6:30 pm)
        </p>

        <Tabs defaultValue="April 7" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            {scheduleData.map((day) => (
              <TabsTrigger
                key={day.date}
                value={day.date}
                className="text-center py-2"
              >
                <span className="block text-sm font-medium">{day.date}</span>
                <span className="block text-xs text-gray-500">{day.theme}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {scheduleData.map((day) => (
            <TabsContent
              key={day.date}
              value={day.date}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-purple-700">
                  {day.date}: {day.theme}
                </h3>
              </div>

              <div className="space-y-6">
                {day.schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${item.type === 'workshop' ? 'bg-purple-50' : 'bg-blue-50'}`}
                  >
                    <div className="flex items-center mb-2">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded ${item.type === 'workshop' ? 'bg-purple-200 text-purple-800' : 'bg-blue-200 text-blue-800'}`}
                      >
                        {item.type.toUpperCase()}
                      </span>
                      <span className="ml-3 text-sm font-medium text-gray-500">
                        {item.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-gray-800">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="mt-1 text-sm text-gray-600">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
