import React, { FC } from 'react';
import { Button, View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constans/Colors';
import Autor from '../../components/autorTab';

const HomeText = styled.Text`
    margin: 0px 50px;
    font-size: 20px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 80px;
    height: 80px;
    margin: 50px;
`;

const TextStyle = StyleSheet.create({
    margintext: {
        marginLeft: 10,
        marginRight: 10,
        textAlign: "justify"
    }
})

interface IHomeProps { 
    myProps: string;
}

const Home: FC<IHomeProps> = (props) => {
    const navigation = useNavigation();

    return (
        <ScrollView>

        <HomeText> {props.myProps}</HomeText>
        <Autor />

        <View>

            <Text style={TextStyle.margintext}>
            Francesinha to chyba najbardziej absurdalna rzecz, jaką jadłem. Pod tą filigranową nazwą kryje się prawdziwa bomba kaloryczna. Portugalczycy zazdrościli francuzom tak bardzo croque monsieur, że postanowili go trochę podtuczyć i stworzyć danie, przy którym dietetycy łapią się za głowę. Oryginalna francesinha składa się z dwóch kromek pieczywa tostowego przełożonego całym wachlarzem mięs: wędzoną paprykową kiełbaską (linguiça), surową białą kiełbasą (salsicha fresca), szynką gotowaną (fiambre) oraz stekiem wołowym (bife de carne de vaca). Żeby tego było mało, to kanapka przykryta jest solidnym kożuchem z sera żółtego, które zdobi na wierzchu jajko, zalana piwnym sosem i podana z frytkami, bo bez frytek to byłoby zbyt fit. 😉

            Pochodzenie dania przypisuje się Danielowi da Silva, który przywiózł ze sobą pomysł na to danie po emigracji do Francji w latach 60-tych. Była ona podawana od 1953 roku w restauracji A Regaleira, zdobywając szybko uznanie mieszkańców Porto. Stała się tak popularna, że obecnie Francesinhę znajdziemy praktycznie na każdym rogu. Nie bez powodu jest też w moim przewodniku 10 rzeczy, które każdy foodie musi zrobić w Porto.

            Jednak wcale nie musimy po nią jechać aż do Portugalii! Francesinha jest bardzo prosta w przygotowaniu także w domowych warunkach i nawet jeśli nie znajdziemy portugalskich odpowiedników linguiças, czy mortadeli, to możemy podmienić polskimi czy dowolnymi innymi wędlinami. Ja wykorzystałem cienkie chorizo, białe kiełbaski oraz włoską mortadellę di Bologna. Nieskromnie powiem, że Francesinha z mojego przepisu wychodzi lepsza niż ta w Porto, więc śmiało Was zachęcam do wypróbowania. 🙂
       
            Francesinha Łukasz Francesinha to chyba najbardziej absurdalna rzecz, jaką jadłem. Pod tą filigranową nazwą kryje się prawdziwa bomba kaloryczna. Portugalczycy zazdrościli francuzom tak bardzo croque monsieur, że postanowili go…

Przepisy przepisy, food2 kuchnia autorska
Czas przygotowania: 30 minut Czas gotowania: 30 minut 30 minut Wartości odżywcze 200 kalorie 20 tłuszcz Ocena 5.0/5 ( 1 zagłosowano )

SKŁADNIKI

Francesinha:

8 kromek pszennego pieczywa tostowego
20 plastrów żółtego sera (dobrej jakości)
4 plastry polędwicy wołowej (ok. 500 g)
4 surowe białe kiełbaski
4 linguiças (cienkie kiełbaski przypominające chorizo, można zastąpić większą ilością białych)
4 plastry mortadeli (najlepiej z oliwkami)
4 plastry szynki gotowanej
4 małe jajka
1 łyżka klarowanego masła
pieprz, sól
 

Molho de Francesinha (sos):

1 cebula
1 ząbek czosnku
1 papryczka piri-piri lub 1 łyżeczka sosu Tabasco
50 g masła
2 listki laurowe
250 ml jasnego piwa
250 ml bulionu wołowego
200 ml passaty pomidorowej
100 ml wina Porto (ewentualnie słodkiego czerwonego wina)
1 łyżeczka skrobi kukurydzianej lub ziemniaczanej
30 ml mleka
 

Dodatkowo:

cienkie frytki do podania
PRZYGOTOWANIE
        </Text>
        </View>
    </ScrollView>
    );
};

export default Home;