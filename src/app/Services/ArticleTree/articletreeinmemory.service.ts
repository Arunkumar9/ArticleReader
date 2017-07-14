/**
 * This service is inmemory service that takes the data for changes,We can take the data from a json file, 
 * but since the app can't save changes to a JSON file, it needs a web API server. Because there isn't a real server for this demo, 
 * it substitutes the Angular in-memory web api simulator for the actual XHR backend service.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
	createDb(){
		let articles = [
		  	{label:'All Articles', data: 'AllArticlesFolder', leaf:'false', parentLable:'',order:'1'},
			{label:'Extjs', data: 'ExtjsFolder', leaf:'false', parentLable:'AllArticlesFolder',order:'1'},
			{label:'Barcode Reader Component', data: 'BarcodeReaderComponent', leaf:'true', parentLable:'ExtjsFolder',order:'1'},
			{label:'Calender Component', data: 'CalenderComponent', leaf:'true', parentLable:'ExtjsFolder',order:'2'},
			{label:'Angular', data: 'AngularFolder', leaf:'false', parentLable:'AllArticlesFolder',order:'2'},
			{label:'Introduction', data: 'Introduction', leaf:'true', parentLable:'AngularFolder',order:'1'},
			{label:'Component Life Cycle', data: 'ComponentLifeCycle', leaf:'true', parentLable:'AngularFolder',order:'2'},
			{label:'Modules', data: 'Modules', leaf:'true', parentLable:'AngularFolder',order:'3'},
			{label:'Components', data: 'Components', leaf:'true', parentLable:'AngularFolder',order:'4'},
			{label:'Data Binding', data: 'DataBinding', leaf:'true', parentLable:'AngularFolder',order:'5'},
			{label:'Services', data: 'Services', leaf:'true', parentLable:'AngularFolder',order:'6'},
			{label:'Dependency Injection', data: 'DependencyInjection', leaf:'true', parentLable:'AngularFolder',order:'7'},
			{label:'Routing', data: 'Routing', leaf:'true', parentLable:'AngularFolder',order:'8'},
			{label:'Java', data: 'JavaFolder', leaf:'false', parentLable:'AllArticlesFolder',order:'3'},
			{label:'Introduction', data: 'Introduction', leaf:'true', parentLable:'JavaFolder',order:'1'},
			{label:'Classes', data: 'Classes', leaf:'true', parentLable:'JavaFolder',order:'2'},
			{label:'Interfaces', data: 'Interfaces', leaf:'true', parentLable:'JavaFolder',order:'3'},
			{label:'Abstract Classes', data: 'AbstractClasses', leaf:'true', parentLable:'JavaFolder',order:'4'},
			{label:'Polymorfisum', data: 'Polymorfisum', leaf:'true', parentLable:'JavaFolder',order:'5'},
			{label:'Inhertance', data: 'Inhertance', leaf:'true', parentLable:'JavaFolder',order:'6'}
		];

		return {articles};
	}
}