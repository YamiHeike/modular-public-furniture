import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Building2,
  Leaf,
  Shield,
  Sun,
  MapPin,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import photo from "../../public/us.jpg";

const Index = () => {
  const surveyTime = 5;
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.fromFormSubmit) {
      toast({
        title: "Dziękuję!",
        description: "Dostaliśmy Twoje wyniki!",
      });

      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate, toast]);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-600 text-white hover:bg-emerald-700">
                Meble miejskie nowej generacji
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transformacja
                <span className="text-emerald-600 block">
                  przestrzeni miejskiej
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Modułowe, ekologiczne i stylowe meble, które zapewniają komfort
                oraz cień w parkach oraz przestrzeniach do pracy. Wykonane z
                trwałych geopolimerów z myślą o lepszym jutrze.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <img src={photo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Users className="h-5 w-5 text-white" />
            <span className="text-white font-medium">
              Razem tworzymy przyszłość
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Marzysz o wygodnych miejscach pracy i odpoczynku?
            <span className="block text-emerald-100">
              Pomóż nam je stworzyć!
            </span>
          </h2>

          <p className="text-emerald-100 text-lg mb-6 max-w-3xl mx-auto">
            Chcemy poznać potrzeby mieszkańców! Twoja opinia ma znaczenie –
            wypełnij krótką ankietę (to tylko {surveyTime} minuty!) i pomóż nam
            zaprojektować meble, których Twoja społeczność naprawdę potrzebuje
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link to="/survey">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold text-lg px-8 py-6 group"
              >
                <Users className="mr-2 h-6 w-6" />
                Wypełnij {surveyTime}-minutową ankietę
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <div className="text-emerald-100 text-sm">
              ✨ Jesteś wśród tych, którym zależy - podziel się swoją opinią!
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">
                {surveyTime} min
              </div>
              <div className="text-emerald-100 text-sm">Szybko i łatwo</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-emerald-100 text-sm">Anonimowo</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">Realny</div>
              <div className="text-emerald-100 text-sm">Wpływ</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meble miejskie, które naprawdę działają
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Brakuje cienia? Ławki niewygodne? Przeprojektowaliśmy meble
              miejskie tak, by naprawdę odpowiadały na codzienne potrzeby –
              również te, które zwykle są pomijane.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-emerald-200 hover:border-emerald-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sun className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Przyjemny cień</h3>
                <p className="text-muted-foreground">
                  Dzięki wbudowanym daszkom i przemyślanemu projektowi,
                  publiczne miejsca stają się przyjazne i komfortowe,
                  niezależnie od pogody.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:border-emerald-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Materiały Przyjazne Środowisku
                </h3>
                <p className="text-muted-foreground">
                  Wykorzystujemy ekologiczne geopolimery, które zmniejszają
                  wpływ na środowisko, zapewniając jednocześnie wyjątkową
                  trwałość i odporność na warunki atmosferyczne.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:border-emerald-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Modułowy Design</h3>
                <p className="text-muted-foreground">
                  Dopasuje się do każdej przestrzeni — od przytulnych zakątków w
                  parkach po nowoczesne przestrzenie przy biurach. Szybki
                  montaż, bezproblemowa konserwacja.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Dla Władz Miast
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Lepsze Wykorzystanie Przestrzeni Publicznej
                  </h3>
                  <p className="text-muted-foreground">
                    Przekształć mało uczęszczane miejsca w tętniące życiem
                    centra społeczności, z których mieszkańcy naprawdę chcą
                    korzystać.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Zrównoważony Rozwój
                  </h3>
                  <p className="text-muted-foreground">
                    Pokaż, że Twoje miasto stawia na ekologię i zieloną
                    transformację
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Niższe koszty</h3>
                  <p className="text-muted-foreground">
                    Geopolimery są wyjątkowo trwałe - to oznacza mniej napraw i
                    niższe koszty utrzymania
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Building2 className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Dla firm</h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Ściągnij pracowników z powrotem do biur
                  </h3>
                  <p className="text-muted-foreground">
                    Wygodne przestrzenie na świeżym powietrzu sprawiają, że
                    praca poza domem znowu ma sens.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Pokaż, że Ci zależy
                  </h3>
                  <p className="text-muted-foreground">
                    Dobrze zaprojektowana przestrzeń mówi wiele — o trosce o
                    ludzi i o odpowiedzialnym podejściu do środowiska.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Łatwy montaż i pełna elastyczność
                  </h3>
                  <p className="text-muted-foreground">
                    Moduły idealnie wpasują się w każde miejsce — od dziedzińców
                    po tarasy i strefy spotkań
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-br from-emerald-50 to-green-100 border-t border-emerald-200 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Gotowi do działania?
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Chcesz odmienić przestrzeń publiczną lub stworzyć komfortową
              strefę na zewnątrz dla swojej firmy? Pomagamy to zrobić szybko i
              bez zbędnych formalności.
            </p>
          </div>
          <div className="text-center pt-8">
            <p className="text-muted-foreground">
              © 2024 Modular Public Furniture — ulepszamy przestrzeń publiczną z
              myślą o środowisku
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
