export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <a href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              AudioGrab<span className="text-blue-400">.</span>
            </a>
            <p className="text-white/50 leading-relaxed">
              Быстрый и бесплатный сервис для скачивания аудио из видео с популярных хостингов.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Навигация</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Платформы</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Как работает</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Платформы</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#work" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">VK Видео</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Rutube</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Дзен</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Поддержка</h4>
            <p className="text-white/60 mb-4">Остались вопросы?</p>
            <a
              href="mailto:hello@audiograb.ru"
              className="text-xl font-medium hover:text-blue-400 transition-colors"
            >
              hello@audiograb.ru
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
          <p>&copy; 2025 AudioGrab. Все права защищены.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}