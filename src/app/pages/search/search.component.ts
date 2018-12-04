import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  from:number;
  to:number;
  showFeatured:boolean=false;
  breakfast:boolean;
  dinner:boolean;
  stayPackage:boolean;
  teamBuilding:boolean;
  transportation:boolean;
  rnrActivity:boolean;
  photographer:boolean;

  total:number;

  RDNature = {
    name:"RD's Nature",
    cost:999,
    url:'http://www.thewildfire.in/wp-content/uploads/2018/04/Twelve-768x464.jpg',
    breakfastResort:150,
    teamBuilding:200,
    transportation:10000,
    rnr:250,
    photographer:5000,
    dinner:300,
    stayPackage:1200,
    total:0
    
  }

  shilhaandara = {
    name:"Shilhaandara",
    cost:1199,
    url:'http://www.thewildfire.in/wp-content/uploads/2018/07/4-768x436.png',
    breakfastResort:150,
    teamBuilding:200,
    transportation:10000,
    rnr:250,
    photographer:5000,
    dinner:350,
    stayPackage:1300,
    total:0
  }

  mangoMist={
    name:"Mango Mist",
    cost:1549,
    url:'http://www.thewildfire.in/wp-content/uploads/2018/04/mango-768x432.jpg',
    breakfastResort:200,
    teamBuilding:200,
    transportation:10000,
    rnr:250,
    photographer:5000,
    dinner:700,
    stayPackage:1600,
    total:0
  }

  windflower={
    name:"Windflower",
    cost:1499,
    url:'http://www.thewildfire.in/wp-content/uploads/2018/07/7-768x523.jpg',
    breakfastResort:400,
    teamBuilding:200,
    transportation:10000,
    rnr:250,
    photographer:5000,
    dinner:750,
    stayPackage:1600,
    total:0
  }

  elimResort={
    name:"Elim Resort",
    cost:1199,
    url:'http://www.thewildfire.in/wp-content/uploads/2018/04/elim1-768x288.png',
    breakfastResort:200,
    teamBuilding:200,
    transportation:10000,
    rnr:250,
    photographer:5000,
    dinner:400,
    stayPackage:1300,
    total:0
  }

  resorts:any[]=[this.RDNature,this.shilhaandara,this.windflower,this.mangoMist,this.elimResort];
  resortList:any[]=[];

  ngOnInit() {
  }

  searchResort(){
    console.log(this.from+" "+this.to)
    this.resortList=[];
    this.total=0;
    for(var i=0;i < this.resorts.length;i++){
      if(this.resorts[i].cost >= this.from && this.resorts[i].cost <= this.to){
        this.total = this.resorts[i].cost;
        if(this.breakfast == true){
          this.total = this.total + this.resorts[i].breakfastResort;
        }
        if(this.dinner == true){
          this.total = this.total + this.resorts[i].dinner;
        }
        if(this.teamBuilding == true){
          this.total = this.total + this.resorts[i].teamBuilding;
        }
        if(this.transportation == true){
          this.total = this.total + this.resorts[i].transportation;
        }
        if(this.rnrActivity == true){
          this.total = this.total + this.resorts[i].rnr;
        }
        if(this.photographer == true){
          this.total = this.total + this.resorts[i].photographer;
        }
        if(this.stayPackage == true){
          this.total = this.total + this.resorts[i].stayPackage;
        }
       this.resorts[i].total = this.total;
        this.resortList.push(this.resorts[i]);
      }
    }
    this.showFeatured=true;
    console.log(this.resortList)
  }



}
