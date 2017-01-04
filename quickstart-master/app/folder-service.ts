import { Injectable } from '@angular/core';
import { Folder } from './Folder';

export const FOLDERS: Folder[] = [
  {id: 11, name: 'Brand', type:0, subFolder:[
		{id:111, name: 'Cateory Hiearchy', type:1,subFolder:[]},
		{id:112 , name: 'Manufacturer Hiearchy',type:1, subFolder:[]},
		{id:113 , name: 'Brand', type:1, subFolder:[]},
		{id:114 , name: 'Brand Family', type:1, subFolder:[]},
		{id:115 , name: 'Category', type:1, subFolder:[]},
		{id:116 , name: 'Flavour', type:1, subFolder:[]},
		{id:117 , name: 'Item', type:1, subFolder:[]},
		{id:118 , name: 'Manufacturer', type:1, subFolder:[]},
		{id:119 , name: 'Mega Category', type:1, subFolder:[]},
		{id:1110 , name: 'Pack Type', type:1, subFolder:[]},
  ]},
  {id: 12, name: 'Geography', type:0, subFolder:[]},
  {id: 13, name: 'Measures', type:0, subFolder:[]},
  {id: 14, name: 'Promo', type:0, subFolder:[]},
  {id: 15, name: 'Shipper',type:0,  subFolder:[]},
  {id: 16, name: 'Time', type:0, subFolder:[]},
  {id: 13, name: 'Transhipment', type:0, subFolder:[]}
];

@Injectable()
export class FolderService{
	getFolders(id: number): Promise<Folders> {
		console.log(FOLDERS);
		return Promise.resolve(FOLDERS);
      })
	}
}