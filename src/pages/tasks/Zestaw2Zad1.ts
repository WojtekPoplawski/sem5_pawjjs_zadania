// Wojciech Popławski, 105685

import { v4 as uuidv4 } from "uuid";

var cenaEnergii = 2;

class Produkt {
  id: string;
  nazwa: string;
  model: string;
  cena: number;
  zuzycieEnergii: number;
  dataProdukcji: number;

  constructor(
    id: string,
    nazwa: string,
    model: string,
    cena: number,
    zuzycieEnergii: number
  ) {
    this.id = id;
    this.nazwa = nazwa;
    this.model = model;
    this.cena = cena;
    this.zuzycieEnergii = zuzycieEnergii;
    this.dataProdukcji = Date.now();
  }

  koszt() {
    return this.cena;
  }

  kosztEnergii() {
    return this.zuzycieEnergii * cenaEnergii;
  }

  wiekProduktu() {
    var dateDifference = new Date(Date.now() - this.dataProdukcji);
    return dateDifference.toJSON();
  }

  wiekProduktuLata() {
    var dateDifference = new Date(this.wiekProduktu());
    var yearDifference = dateDifference.getFullYear();
    switch (yearDifference) {
      case 1: {
        return yearDifference + " rok";
      }
      case 2 || 3 || 4: {
        return yearDifference + " lata";
      }
      default: {
        return yearDifference + " lat";
      }
    }
  }
}

class ListaTowarów {
  lista: Array<any>;

  constructor() {
    this.lista = new Array<any>();
  }

  wypiszProdukt(id: string) {
    var produkt = this.lista.find((element) => element.id === id);
    if (produkt === undefined) {
      try {
        throw new Error("Brak produktu na liście");
      } catch (e) {
        console.log(e);
      }
      return undefined;
    } else return produkt;
  }

  wypiszWszystkieProdukty() {
    return this.lista;
  }

  dodajProdukt(produkt: Produkt) {
    if (this.wypiszProdukt(produkt.id) === undefined) {
      this.lista = this.lista.concat(produkt);
    } else {
      try {
        throw new Error("Produkt znajduje się na liście");
      } catch (e) {
        console.log(e);
      }
    }
  }

  zmienProdukt(id: string, produkt: Produkt) {
    var zmienianyProdukt = this.wypiszProdukt(id);
    var zmienianaLista = this.lista.filter((element) => element.id !== id);
    if (zmienianyProdukt !== undefined && zmienianaLista.length !== 0) {
      zmienianyProdukt.nazwa = produkt.nazwa;
      zmienianyProdukt.model = produkt.model;
      zmienianyProdukt.cena = produkt.cena;
      zmienianyProdukt.zuzycieEnergii = produkt.zuzycieEnergii;
      zmienianyProdukt.dataProdukcji = produkt.dataProdukcji;
      zmienianaLista = zmienianaLista.concat(zmienianyProdukt);
      this.lista = zmienianaLista;
    } else {
      try {
        throw new Error("Zmiana produktu jest niemożliwa");
      } catch (e) {
        console.log(e);
      }
    }
  }
}

class ProduktMagazynowy extends Produkt {
  ilosc: number;

  constructor(
    id: string,
    nazwa: string,
    model: string,
    cena: number,
    zuzycieEnergii: number,
    ilosc: number
  ) {
    super(id, nazwa, model, cena, zuzycieEnergii);
    this.ilosc = ilosc;
  }
}

class Magazyn extends ListaTowarów {
  constructor() {
    super();
  }

  dodajProduktMagazynowy(produkt: Produkt, ilosc: number) {
    var produktMagazynowy = new ProduktMagazynowy(
      produkt.id,
      produkt.nazwa,
      produkt.model,
      produkt.cena,
      produkt.zuzycieEnergii,
      ilosc
    );
    if (this.wypiszProdukt(produktMagazynowy.id) === undefined) {
      this.lista = this.lista.concat(produktMagazynowy);
    } else {
      try {
        throw new Error("Produkt znajduje się na liście");
      } catch (e) {
        console.log(e);
      }
    }
  }

  zabierzProdukt(id: string) {
    var product = this.wypiszProdukt(id);
    var index = this.lista.indexOf(product);
    this.lista[index].ilosc--;
    return product;
  }
}

class Sklep extends ListaTowarów {
  constructor() {
    super();
  }

  dodajProduktSklepowyBezId(
    nazwa: string,
    model: string,
    cena: number,
    zuzycieEnergii: number
  ) {
    var produkt = new Produkt(uuidv4(), nazwa, model, cena, zuzycieEnergii);
    if (this.wypiszProdukt(produkt.id) === undefined) {
      this.lista = this.lista.concat(produkt);
    } else {
      try {
        throw new Error("Produkt znajduje się na liście");
      } catch (e) {
        console.log(e);
      }
    }
  }

  dodajProduktSklepowy(
    id: string,
    nazwa: string,
    model: string,
    cena: number,
    zuzycieEnergii: number
  ) {
    var produkt = new Produkt(id, nazwa, model, cena, zuzycieEnergii);
    if (this.wypiszProdukt(produkt.id) === undefined) {
      this.lista = this.lista.concat(produkt);
    } else {
      try {
        throw new Error("Produkt znajduje się na liście");
      } catch (e) {
        console.log(e);
      }
    }
  }
}

interface Zamowienie {
  id: string;
  ilosc: number;
}

class ListaZamowienia {
  lista: Array<Zamowienie>;

  constructor() {
    this.lista = new Array<Zamowienie>();
  }

  dodajDoZamowienia(id: string, ilosc: number) {
    this.lista = this.lista.concat({ id, ilosc });
  }

  zrealizujZamowienie(lista: Array<any>) {
    var nowaLista = lista;
    this.lista.forEach((element) => {
      var index = nowaLista.indexOf((produkt: Produkt) => {
        return produkt.id === element.id;
      });
      nowaLista[index].ilosc -= element.ilosc;
    });
  }
}
