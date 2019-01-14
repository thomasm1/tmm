(function () {
   'use strict';


   // get the app module
   angular.module('app')
      .controller('dataEvents',
      [dataEvents]);

   function dataEvents() {
      var vm = this;
      vm.activate = activate;

      activate();

      function activate() {




         vm.cars = [
            {year: 2012, make: "Ferrari", model: "California"},
            {year: 2012, make: "Ferrari", model: "458 Italia"},
            {year: 2012, make: "Lamborghini", model: "Aventador"},
            {year: 2012, make: "Lamborghini", model: "Gallardo LP-570"},
            {year: 2012, make: "Porsche", model: "911 GT3"},
            {year: 2012, make: "McLaren", model: "MP14-12C"},
            {year: 2012, make: "Koenigsegg", model: "CCX"},
            {year: 1971, make: "Plymouth", model: "(Hemi) Barracuda"},
            {year: 1967, make: "Ford", model: "Shelby Mustang GT500"},
            {year: 1972, make: "Jaguar", model: "E-Type"}
         ];

         vm.carsDataSource = new kendo.data.DataSource(
          { data: vm.cars, 
             pageSize: 5 , 
             sort: 
                {field: "year", 
                dir: "asc"}});
    
                vm.carsDataSource.read();
    
       $("#cars").kendoGrid({
          dataSource: vm.carsDataSource,
          columns: [ 
             { field: "year", title: "Year"} ,
             { field: "make", title: "Make" } , 
             { field: "model", title: "Model" },
             { command: ["edit"]}
          ],
          pageable: true,
          scrollable: false,
          sortable: true,
          groupable: true,
          filterable: true,
          editable: "inline"
       });
    
    
       vm.twitterSearch = new kendo.data.DataSource({
                transport: {
                     read: {
                      url: "http://demos.kendoui.com/service/Twitter/Search",
                      dataType: "jsonp",
                      data: { q: "#kendoui" }
                   }
                },
                schema: { // describe the result format
                             data: function(data) { // the data which the data source will be bound to is in the "results" field
                                 return data.statuses || [];
                             }
                         },
             });	
    
             $("#searchResults").kendoGrid({
                dataSource: vm.twitterSearch,
                columns: [ 
                         { field: "created_at", title: "Tweeted"} ,
                         { field: "user.screen_name", title: "Tweeter" } , 
                         { field: "text", title: "Tweet" }
                      ],
             });		
               
    
      

   vm.treeOptions = {
          dataSource: makeData(),
          checkboxes: {
             template: "<input type='checkbox' ng-model='dataItem.checked' />"
          }
       };
    
       $(document).ready("kendoWidgetCreated", function(event, widget) {
  
             widget.element.find(".k-checkbox input:checked").each(function () {
                widget.expand($(this).parents(".k-item"));
             }); 
       });
    
       function makeData(){
          return [
             { text: "Memory", items: [
                { text: "Chips", items: [
                   { text: "8 GB DDR", checked: true },
                   { text: "8 GB DDR", checked: true }]},
                { text: "Manufacturer", items: [
                   { text: "Acme Widgets", checked: true },
                   { text: "Foo Chips" },
                   { text: "Fish & Chips" }]},
                { text: "Speed", items: [
                   { text: "100ms" },
                   { text: "500ms", checked: true },
                   { text: "1200ms" }]}]},
             { text: "Storage", checked: true, items: [
                { text: "Flash Drive", items: [
                   { text: "256 GB" },
                   { text: "500 GB" },
                   { text: "1 TB", checked: true }]},
                { text: "Standard Drive", items: [
                   { text: "1 TB" },
                   { text: "2 TB" },
                   { text: "4 TB" }]},
                { text: "External", items: [
                   { text: "1 TB USB" },
                   { text: "2 TB USB" },
                   { text: "8 TB Lightning", checked: true }]}]},
             { text: "CD/DVD", items: [
                { text: "CD", items: [
                   { text: "CD RO" },
                   { text: "CD RW" },
                   { text: "CD RWX" }]},
                { text: "DVD", items: [
                   { text: "DVD RO" },
                   { text: "DVD RW" },
                   { text: "DVD RWX" }]},
                { text: "Combo", items: [
                   { text: "R" },
                   { text: "RW" },
                   { text: "RWX" }]}]}
          ]
       }

         }
   }
})();