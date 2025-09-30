import React from "react";
import { Sparkles, Zap, Globe, TrendingUp, Users, BarChart3 } from "lucide-react";

const bentoFeatures = [
  {
    icon: Sparkles,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms uncover hidden patterns and predict trends with unprecedented accuracy.",
    colSpan: "col-span-1 md:col-span-3",
    rowSpan: "row-span-2",
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Get comprehensive reports in minutes, not weeks.",
    colSpan: "col-span-1 md:col-span-3",
    rowSpan: "row-span-1",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access data from markets worldwide with detailed regional insights.",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
    gradient: "from-cyan-500/20 to-emerald-500/20"
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Stay ahead with predictive analytics and market forecasting.",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    icon: Users,
    title: "Competitor Insights",
    description: "Deep dive into competitor strategies and market positioning.",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
    gradient: "from-green-500/20 to-yellow-500/20"
  },
  {
    icon: BarChart3,
    title: "Custom Analytics",
    description: "Tailored dashboards that make complex data easy to understand.",
    colSpan: "col-span-1 md:col-span-4",
    rowSpan: "row-span-1",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section id="features" className="relative flex flex-col w-full items-center px-4 md:px-0 py-20 md:py-32 overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl animate-[blob_24s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #a855f7, transparent 60%)',
          }}
        />
        <div 
          className="absolute top-40 -right-20 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl animate-[blob_28s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle at 70% 70%, #3b82f6, transparent 60%)',
            animationDelay: '4s',
          }}
        />
        <div 
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl animate-[blob_32s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #06b6d4, transparent 60%)',
            animationDelay: '8s',
          }}
        />
      </div>

      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-12 md:gap-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-24 relative w-full">
          <h2 className="relative w-full md:w-[712px] mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-3xl md:text-[length:var(--heading-h2-font-size)] text-center md:text-left tracking-[var(--heading-h2-letter-spacing)] leading-tight md:leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            Powerful AI features to revolutionize your market research
          </h2>

          <p className="relative w-full md:w-[392px] font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-base md:text-[length:var(--subtitle-RG-font-size)] text-center md:text-left tracking-[var(--subtitle-RG-letter-spacing)] leading-relaxed md:leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
            From global market analysis to competitor insights, our AI-powered platform delivers comprehensive intelligence at unprecedented speed and value.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(160px,auto)] gap-4 w-full">
          {bentoFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 md:p-8 group hover:scale-[1.02] transition-all duration-300 ${feature.colSpan} ${feature.rowSpan} relative overflow-hidden`}
              >
                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primaryblue-violet to-purple-600 flex items-center justify-center shadow-lg shadow-primaryblue-violet/50">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-lg md:text-xl tracking-[var(--heading-h6-letter-spacing)] leading-tight [font-style:var(--heading-h6-font-style)]">
                        {feature.title}
                      </h3>
                      
                      <p className="font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralgray-300 text-sm md:text-base tracking-[var(--paragraph-RG-letter-spacing)] leading-relaxed [font-style:var(--paragraph-RG-font-style)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
