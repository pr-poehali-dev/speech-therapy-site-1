import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-primary">
              Логоритмика 🎵
            </h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('logorhythmic')} className="text-sm font-medium hover:text-primary transition-colors">
                Логоритмика
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                Обо мне
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Логопедические занятия<br />для детей в Свердловской области
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Помогаю детям развивать речь через движение, музыку и игру
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full animate-bounce-gentle"
              onClick={() => scrollToSection('contacts')}
            >
              Записаться на занятие
            </Button>
          </div>
          <div className="mt-12">
            <img 
              src="https://cdn.poehali.dev/projects/cc4dd63b-b151-48dd-868b-157db23bf6df/files/fc0cf04a-d605-4195-bc51-524fb9a25963.jpg" 
              alt="Логоритмика"
              className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="logorhythmic" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Что такое логоритмика? 🎶
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-4 text-primary">
                  <Icon name="Music" size={48} />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">Музыка и ритм</h3>
                <p className="text-muted-foreground">
                  Занятия проходят под музыкальное сопровождение, что помогает детям лучше усваивать речевые навыки и развивать чувство ритма
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-4 text-primary">
                  <Icon name="Users" size={48} />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">Игровая форма</h3>
                <p className="text-muted-foreground">
                  Через игры и упражнения дети развивают координацию движений, внимание, память и, конечно же, речь
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-4 text-primary">
                  <Icon name="Heart" size={48} />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Каждое занятие адаптируется под возраст и особенности развития ребёнка для максимальной эффективности
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-4 text-primary">
                  <Icon name="Sparkles" size={48} />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">Комплексное развитие</h3>
                <p className="text-muted-foreground">
                  Логоритмика развивает не только речь, но и моторику, внимание, мышление и эмоциональную сферу
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/cc4dd63b-b151-48dd-868b-157db23bf6df/files/b3d6a67d-25e2-4e32-937c-400ced296981.jpg" 
              alt="Занятия логоритмикой"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Мои услуги 📋
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Baby" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">Групповые занятия</h3>
                <p className="text-muted-foreground mb-4">
                  Занятия в небольших группах до 6 человек для социализации и веселья
                </p>
                <p className="text-2xl font-bold text-primary">от 800₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-primary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">Индивидуальные занятия</h3>
                <p className="text-muted-foreground mb-4">
                  Персональный подход с учётом особенностей вашего ребёнка
                </p>
                <p className="text-2xl font-bold text-primary">от 1500₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Home" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">Занятия на дому</h3>
                <p className="text-muted-foreground mb-4">
                  Выезд специалиста к вам домой в удобное время
                </p>
                <p className="text-2xl font-bold text-primary">от 2000₽</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/cc4dd63b-b151-48dd-868b-157db23bf6df/files/430586cf-aea6-4c29-bb62-4c4cec0cfae9.jpg" 
                  alt="Логопед"
                  className="w-full rounded-3xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6">
                  Обо мне 👋
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Я — логопед с многолетним опытом работы с детьми разного возраста. 
                  Моя специализация — логоритмика, методика, которая объединяет речевое развитие 
                  с музыкой и движением.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Я верю, что каждый ребёнок уникален, и подбираю программу занятий индивидуально. 
                  Мои занятия проходят в игровой форме, чтобы дети получали удовольствие и 
                  максимальную пользу.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3">
                    <Icon name="GraduationCap" className="text-primary" size={24} />
                    <span>Высшее педагогическое образование</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Award" className="text-primary" size={24} />
                    <span>Сертифицированный логопед</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Star" className="text-primary" size={24} />
                    <span>Более 5 лет работы с детьми</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Отзывы родителей ⭐
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Отличный специалист! Моя дочка с удовольствием ходит на занятия. За 3 месяца заметен большой прогресс в речи."
                </p>
                <p className="font-semibold">Елена, мама Маши (4 года)</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Очень понравились занятия! Ребёнок всегда в восторге, занятия проходят интересно и весело."
                </p>
                <p className="font-semibold">Анна, мама Артёма (5 лет)</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Профессиональный подход и забота о каждом ребёнке. Сын стал увереннее и лучше говорит. Спасибо!"
                </p>
                <p className="font-semibold">Ольга, мама Димы (6 лет)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Контакты 📞
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Свяжитесь со мной удобным для вас способом
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    Свердловская область,<br />
                    г. Екатеринбург
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-2">Телефон</h3>
                  <a href="tel:+79000000000" className="text-primary hover:underline text-lg">
                    +7 (900) 000-00-00
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                className="gap-2"
                onClick={() => window.open('https://vk.com/your-group', '_blank')}
              >
                <Icon name="Users" size={20} />
                Моё сообщество ВКонтакте
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2024 Логоритмика для детей. Свердловская область
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
