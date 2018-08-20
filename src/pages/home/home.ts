import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noOfItemsToView = 3;
  showViewMoreButton = true;

  pipelines: Array<{ isPassed: boolean, name: string, date: string }> = [
    {isPassed: true, name: "Labor Day", date: "Mon, September 3, 2018"},
    {isPassed: false, name: "Thanksgiving Day", date: "Thu, November 22, 2018"},
    {isPassed: false, name: "Day after Thanksgiving", date: "Fri, November 23, 2018"},
    {isPassed: true, name: "Vacation Day / Floating Day", date: "Mon, December 24, 2018"},
    {isPassed: false, name: "Christmas Day", date: "Tue, December 25, 2018"},
    {isPassed: false, name: "Extended Firm Holiday", date: "Wed, December 26, 2018"},
    {isPassed: true, name: "Extended Firm Holiday", date: "Thu, December 27, 2018"},
    {isPassed: false, name: "Vacation Day / Floating Day", date: "Fri, December 28, 2018"},
    {isPassed: false, name: "Vacation Day / Floating Day", date: "Mon, December 31, 2018"},
    {isPassed: true, name: "New Year's Day", date: "Tue, January 1, 2019"},
    {isPassed: false, name: "Memorial Day", date: "Mon, May 27, 2019"},
    {isPassed: false, name: "Extended Firm Holiday", date: "Mon, July 2, 2018"},
    {isPassed: true, name: "Extended Firm Holiday", date: "Tue, July 3, 2018"},
    {isPassed: false, name: "Independence Day", date: "Wed, July 4, 2018"},
    {isPassed: true, name: "Extended Firm Holiday", date: "Thu, July 5, 2018"},
    {isPassed: false, name: "Vacation Day / Floating Day", date: "Fri, July 6, 2018"},
  ];

  constructor() {

  }

  getMinimumList() {
    return this.pipelines.slice(0, this.noOfItemsToView);
  }

  getPassedList() {
    if (!this.showViewMoreButton) {
      return this.pipelines.filter(item => item.isPassed);
    } else {
      return [];
    }
  }

  showAllItems() {
    this.noOfItemsToView = this.pipelines.length;
    this.showViewMoreButton = false;
  }
}
