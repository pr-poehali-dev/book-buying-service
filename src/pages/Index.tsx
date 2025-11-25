import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isbn, setIsbn] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const handleEstimate = () => {
    if (isbn.length >= 10) {
      const mockPrice = Math.floor(Math.random() * 800) + 100;
      setEstimatedPrice(mockPrice);
      setBookTitle('Введите название книги');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="BookOpen" size={32} className="text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              КнигоСкупка
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#how-it-works" className="hover:text-primary transition-colors">Как это работает</a>
            <a href="#conditions" className="hover:text-primary transition-colors">Условия</a>
            <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">Связаться</Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Продайте книги{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                быстро и выгодно
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Онлайн-оценка по ISBN за 30 секунд. Бесплатная доставка от 10 книг. Деньги сразу после осмотра.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg" onClick={() => document.getElementById('estimate')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Calculator" size={20} className="mr-2" />
                Оценить книги
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">15000+</div>
                <div className="text-sm text-muted-foreground">Книг скуплено</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Работаем круглосуточно</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/33ec6626-e1fe-4ddc-b24f-93207bcb3141/files/292de035-503e-4fc7-94ac-d3843debfab9.jpg" 
              alt="Стопка книг"
              className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <section id="estimate" className="container mx-auto px-4 py-20 bg-white/50 backdrop-blur-sm rounded-3xl my-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Узнайте стоимость ваших книг</h2>
            <p className="text-lg text-muted-foreground">Введите ISBN номер или название книги для быстрой оценки</p>
          </div>

          <Card className="shadow-lg animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Barcode" size={24} />
                Форма оценки
              </CardTitle>
              <CardDescription>ISBN можно найти на обратной стороне книги рядом со штрих-кодом</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">ISBN номер</label>
                <Input 
                  placeholder="978-5-17-123456-7" 
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Название книги (опционально)</label>
                <Input 
                  placeholder="Например: Мастер и Маргарита" 
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button 
                size="lg" 
                className="w-full text-lg" 
                onClick={handleEstimate}
                disabled={isbn.length < 10}
              >
                <Icon name="Search" size={20} className="mr-2" />
                Оценить стоимость
              </Button>

              {estimatedPrice && (
                <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl animate-scale-in">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Примерная стоимость</div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      {estimatedPrice} ₽
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Точная оценка будет проведена после осмотра книги специалистом
                    </p>
                    <Button size="lg" className="mt-4">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
          <p className="text-lg text-muted-foreground">Всего 4 простых шага до получения денег</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: 'Search', title: 'Оценка', desc: 'Введите ISBN или название книги для предварительной оценки стоимости' },
            { icon: 'Phone', title: 'Заявка', desc: 'Оставьте заявку онлайн или позвоните нам по телефону' },
            { icon: 'Truck', title: 'Доставка', desc: 'Бесплатный вывоз курьером от 10 книг или отправка почтой' },
            { icon: 'Wallet', title: 'Деньги', desc: 'Получите оплату сразу после осмотра наличными или переводом' }
          ].map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all animate-fade-in hover:scale-105">
              <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5">
                {index + 1}
              </div>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={step.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="conditions" className="container mx-auto px-4 py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Условия скупки</h2>
            <p className="text-lg text-muted-foreground">Мы покупаем книги в хорошем состоянии по выгодным ценам</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                img: 'https://cdn.poehali.dev/projects/33ec6626-e1fe-4ddc-b24f-93207bcb3141/files/95ae7d3b-a35b-4438-8647-081e4cbb8165.jpg',
                title: 'Высокие цены',
                desc: 'До 70% от рыночной стоимости'
              },
              { 
                img: 'https://cdn.poehali.dev/projects/33ec6626-e1fe-4ddc-b24f-93207bcb3141/files/780db021-e129-4f20-aa99-961d4078e481.jpg',
                title: 'Быстрый выкуп',
                desc: 'Деньги в день обращения'
              },
              { 
                img: 'https://cdn.poehali.dev/projects/33ec6626-e1fe-4ddc-b24f-93207bcb3141/files/292de035-503e-4fc7-94ac-d3843debfab9.jpg',
                title: 'Любые жанры',
                desc: 'Художественная, учебная, детская'
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all animate-scale-in hover:scale-105">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon name="CheckCircle2" size={28} className="text-primary" />
              Какие книги принимаем
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Художественная литература',
                'Учебники и методички',
                'Детская литература',
                'Научная литература',
                'Книги на иностранных языках',
                'Редкие и антикварные издания'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Доставка и выкуп</h2>
            <p className="text-lg text-muted-foreground">Выберите удобный способ передачи книг</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all animate-slide-in">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Truck" size={32} className="text-white" />
                </div>
                <CardTitle>Курьерская доставка</CardTitle>
                <CardDescription>Бесплатный вывоз по Москве</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium">От 10 книг — бесплатно</div>
                    <div className="text-sm text-muted-foreground">Вывоз в день обращения</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium">Оплата на месте</div>
                    <div className="text-sm text-muted-foreground">Наличными или картой</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all animate-slide-in">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <CardTitle>Самовывоз</CardTitle>
                <CardDescription>Приезжайте к нам в офис</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium">Оценка за 15 минут</div>
                    <div className="text-sm text-muted-foreground">Моментальная оплата</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium">Работаем ежедневно</div>
                    <div className="text-sm text-muted-foreground">С 10:00 до 21:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="container mx-auto px-4 py-20 bg-gradient-to-br from-primary to-secondary rounded-3xl text-white my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl mb-12 text-white/90">Ответим на все вопросы и поможем продать книги выгодно</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3 animate-scale-in">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={28} />
              </div>
              <div className="font-bold text-lg">+7 (495) 123-45-67</div>
              <div className="text-white/80">Звонки принимаем 24/7</div>
            </div>
            <div className="flex flex-col items-center gap-3 animate-scale-in">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="Mail" size={28} />
              </div>
              <div className="font-bold text-lg">info@knigoskupka.ru</div>
              <div className="text-white/80">Ответим в течение часа</div>
            </div>
            <div className="flex flex-col items-center gap-3 animate-scale-in">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={28} />
              </div>
              <div className="font-bold text-lg">Москва, Тверская 1</div>
              <div className="text-white/80">м. Охотный ряд</div>
            </div>
          </div>

          <Button size="lg" variant="secondary" className="text-lg">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Написать в WhatsApp
          </Button>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon name="BookOpen" size={28} className="text-primary" />
            <span className="text-xl font-bold">КнигоСкупка</span>
          </div>
          <div className="text-muted-foreground">
            © 2024 КнигоСкупка. Все права защищены.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
