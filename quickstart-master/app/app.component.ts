import { Component } from '@angular/core';
import { Folder } from './Folder';
import { FolderService } from './folder-service';


@Component({
  selector: 'my-app',
  template: `
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<button (click)="openPopup()">Test Click</button>
		<div class="container popup" *ngIf="showPopup">
			<div class="row">
				<div class="col-sm-12">
					<span class="header-tittle">Distributor Template</span>
					<span class="header-menu-wrapper">
						<ul class="header-menu-options">
							<li>View</li>
							<li>Options</li>
							<li>Customs</li>
							<li>Presents</li>
							<li>View As</li>
							<li>Close</li>
						</ul>
					</span>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4">
					<div class="folder-container">
						<span class="folder-wrapper">
							<ul class="padding0">
								<li *ngFor="let folder of folderList" value="{{folder.id}}"><span class="glyphicon glyphicon-folder-close folders"></span><span class="folder-name">{{folder.name}}</span>
									<ul *ngIf="folder.subFolder.length !== 0" class="folder-content">
										<li *ngFor="let subFolder of folder.subFolder">
											<span *ngIf="subFolder.type == false" class="glyphicon glyphicon-folder-close folders"></span>
											<span *ngIf="subFolder.type == true" class="glyphicon glyphicon-qrcode folders"></span>
											<span>{{subFolder.name}}</span>
										</li>
									</ul>
								</li>
							</ul>
						</span>
						<span class="dimension-bar"></span>
					</div>
				</div>
				<div class="col-sm-8">
					<span>Spin Dimensions(9)</span>
					<textarea rows="3" cols="50"></textarea>
					<div>All time - Total Distributors</div>
					<div class="col-sm-4">
						<p class="select-tab">Select Print Fields...</p>
						<p class="select-tab">Hide Print Fields...</p>
						<textarea rows="10" cols="10"></textarea>
					</div>
					<div class="col-sm-8">
						<textarea rows="3" cols="30"></textarea>
					</div>
					<div>
						<div class="dropped-content">
							
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-3">
					<span class="reportFootnoteLabel"><label for="reportFootnote">Report Footnote :</label></span>
				</div>
				<div class="col-sm-9">
					<textarea class="report-footnote" name="reportFootNote" value="reportFootNote"></textarea>
				</div>
			</div>
		</div>
			`,
		styles: [`
			.popup{
				width:50%;
				height:100%;
				margin:0 auto;
				padding:0 0;
				background-color:#f5f5f0;
				border:1px solid black;
			}
			.header-tittle{
				font-family:Arial, Helvetica, sans-serif;
				font-size:12px;
				font-weight:bold;
				display:inline-block;
				float:left;
				margin: 15px 10px;
			}
			.header-menu-wrapper{
				display:inline-block;
				float:right;
				
			}
			.header-menu-options{
				margin:2px 4px 2px;
			}
			
			.header-menu-options li{
				list-style:none;
				display:inline-block;
				float:right;
				padding: 2px 4px;
				border:1px solid #b8b894;
				margin:0 2px;
				font-size:17px;
			} 
			.reportFootnoteLabel{
				font-weight:bold;
				font-size:12px;
				font-family:Arial, Helvetica, sans-serif;
				margin-left:10px;
			}
			.report-footnote{
				width:99%;
				resize:none;
				margin: 4px;
				border:1px solid #b8b894;;
				margin-left:0;
				overflow-y:auto;
			}
			.folder-wrapper{
				background-color:white;
				height:100%;
				width:99%;
				margin:1px;
			}
			.dimension-bar{
				display:inline-block;
				height:99%;
				width:2%;
				color:#c2d6d6;
			}
			.folder-container{
				background-color: white;
				margin-left: 5px;
				border: 1px solid #a3a375;
			}
			.folder-wrapper ul li{
				list-style-type:none;
			}
			.folders{
				margin-right: 8px;
				color: #b3e6ff;
			}
			.padding0{
				padding:0 0 0 2px!important;
			}
			.folder-name{
				font-size:11px;
				font-weight:bold;
			}
			.folder-content{
				font-style: italic;
				font-size:12px;
			}
			textarea{
				resize:none;
				border:2px solid #e0e0d1;
			}
			.select-tab{
				font-size:10px;
				border:1px solid #8a8a5c;
				background-color:#e6f2ff;
				padding: 2px auto;
				text-align:center;
			}
			.dropped-content{
				height: 185px;
				width: 281px;
				display: inline-block;
				border: 1px solid #e0e0d1;
			}
			
			.dropped-content thead tr th{
				border : 1px solid black;
			}
			.dropped-content tbody tr td{
				border : 1px solid black;
			}
		`],
	providers : [FolderService]
})
export class AppComponent  { 
	name = 'Angular';
	public showPopup = false;
	
	public folder : Folder[];
	public folderList : Folder[];
	
	openPopup() : void{
		this.showPopup=!this.showPopup;
		console.log(this.folderList);
	}
	
	constructor(private folderService : FolderService){}
	
	getFolders() : void{
		this.folderService.getFolders().then(folder => this.folderList = folder);
		console.log(this.folder);
	}
	
	ngOnInit() : void{
		this.getFolders();
	}
	
	}
