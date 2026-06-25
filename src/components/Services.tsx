import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Music, Zap, ShieldCheck, Infinity as InfinityIcon } from 'lucide-react'

const services = [
  {
    icon: <Music className="w-8 h-8 text-blue-400" />,
    title: "Максимальное качество",
    description: "Извлекаем аудиодорожку без потерь — до 320 kbps в MP3 и оригинальный M4A. Звук остаётся таким же чистым, как в исходном видео.",
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: "Молниеносная скорость",
    description: "Конвертация занимает считанные секунды. Просто вставьте ссылку — и файл готов к загрузке, без долгого ожидания.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
    title: "Безопасно и анонимно",
    description: "Не требуем регистрации и не храним ваши ссылки. Никаких водяных знаков и вирусов — только чистый аудиофайл.",
  },
  {
    icon: <InfinityIcon className="w-8 h-8 text-pink-400" />,
    title: "Без ограничений",
    description: "Скачивайте сколько угодно треков совершенно бесплатно. Никаких лимитов на количество файлов и длительность.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Почему AudioGrab
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                  Узнать больше <div className="w-4 h-[1px] bg-current transition-all group-hover:w-8" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}