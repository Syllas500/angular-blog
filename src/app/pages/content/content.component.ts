import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string =
    'https://ofolhetimcultural.com.br/wp-content/uploads/2024/05/Universo-Cinematografico-da-Marvel.jpg';
  @Input()
  contentTitle: string = 'Minha noticia';
  @Input()
  contentDescripition: string = 'Bla blablbablalbablablalbalblabl';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id.toString() == id)[0];
    this.contentTitle = result.title;
    this.contentDescripition = result.descripition;
    this.photoCover = result.photoCover;
  }
}
