import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | About Me and My Start",
      url: "/chapter1",
      icon: "person"
    },
    {
      title: "Chapter 2 | Streaming Requirements",
      url: "/chapter2",
      icon: "mic"
    },
    {
      title:"Chapter 3 | Streaming Wants",
      url: "/chapter3",
      icon: "cash"
    },
    {
      title:"Chapter 4 | Do's and Don'ts",
      url: "/chapter4",
      icon: "hand"
    },
    {
      title: "Chapter 5 | Growing your Stream",
      url: "/chapter5",
      icon: "desktop"
    },
    {
      title: "Chapter 6 | Good Luck on your Adventure",
      url: "/chapter6",
      icon: "ribbon"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
