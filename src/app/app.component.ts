import { Component, OnInit } from '@angular/core';
import { TreeModel ,Ng2TreeSettings} from './itreelite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'ng2treepoc';
   showTree = false;
  public settings: Ng2TreeSettings = {
    showCheckboxes: true,
    rootIsVisible:true
  };

  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [{ value: 'Java' }, { value: 'C++' }, { value: 'C#' }]
      },
      {
        value: 'Prototype-based programming',
        children: [{ value: 'JavaScript' }, { value: 'CoffeeScript' }, { value: 'Lua' }]
      }
    ]
  };


  public ffs: TreeModel = {
    value: 'root',
    id: 1,
    children: [
      {
        value: 'bin1',
        id: 2,
        children: [
          { value: 'bash', id: 3 },
          { value: 'umount', id: 4 },
          { value: 'cp', id: 5 },
          { value: 'less', id: 6 },
          { value: 'rmdir', id: 7 },
          { value: 'touch', id: 8 },
          { value: 'chgrp', id: 9 },
          { value: 'chmod', id: 10 },
          { value: 'chown', id: 11 },
          { value: 'nano', id: 12 }
        ],
        settings: {
          isCollapsedOnInit: true
        }
      },
      {
        value: 'boot',
        id: 13,
        settings: {
          isCollapsedOnInit: true,
          keepNodesInDOM: true
        },
        children: [
          {
            value: 'grub',
            id: 14,
            children: [
              { value: 'fonts', id: 15 },
              { value: 'gfxblacklist.txt', id: 16 },
              { value: 'grub.cfg', id: 17 },
              { value: 'grubenv', id: 18 },
              { value: 'i386-pc', id: 19 },
              { value: 'locale', id: 20 },
              { value: 'unicode.pf2', id: 21 }
            ]
          },
          {
            value: 'lost+found',
            id: 22,
            children: [],
            settings: {
              checked: true
            }
          },
          { value: 'abi-4.4.0-57-generic', id: 23 },
          { value: 'config-4.4.0-57-generic', id: 24 },
          { value: 'initrd.img-4.4.0-47-generic', id: 25 },
          { value: 'initrd.img-4.4.0-57-generic', id: 26 },
          { value: 'memtest86+.bin', id: 27 },
          { value: 'System.map-4.4.0-57-generic', id: 28 },
          { value: 'memtest86+.elf', id: 29 },
          { value: 'vmlinuz-4.4.0-57-generic', id: 30 },
          { value: 'memtest86+_multiboot.bin', id: 31 }
        ]
      },
      {
        value: 'build-no-left-no-right-menus',
        id: 32,
        settings: {
          leftMenu: false,
          rightMenu: false
        },
        children: [
          {
            value: 'php5-left-menu',
            id: 33,
            settings: {
              leftMenu: true
            }
          },
          {
            value: 'grails-left-menu',
            id: 335,
            settings: {
              leftMenu: true
            }
          },
          {
            value: 'python-right-menu',
            id: 333,
            settings: {
              rightMenu: true
            }
          }
        ]
      },
      { value: 'cdrom', id: 34, children: [] },
      { value: 'dev', id: 35, children: [] },
      {
        value: 'etc',
        id: 36,
        loadChildren: callback => {
          console.log('callback function called to load etc`s children');
          setTimeout(() => {
            callback([
              { value: 'apache2', id: 82, children: [] },
              { value: 'nginx', id: 83, children: [] },
              { value: 'dhcp', id: 84, children: [] },
              { value: 'dpkg', id: 85, children: [] }
            ]);
          });
        }
      },
      {
        value: 'home',
        id: 37,
        children: [
          {
            value: 'firstUser',
            id: 38,
            children: [
              {
                value: 'Documents',
                id: 39,
                children: [
                  {
                    value: 'home',
                    id: 40,
                    children: [
                      {
                        value: 'bills',
                        id: 41,
                        children: [
                          { value: '2016-07-01-mobile.pdf', id: 42 },
                          { value: '2016-07-01-electricity.pdf', id: 43 },
                          { value: '2016-07-01-water.pdf', id: 44 },
                          { value: '2016-07-01-internet.pdf', id: 45 },
                          { value: '2016-08-01-mobile.pdf', id: 46 },
                          { value: '2016-10-01-internet.pdf', id: 47 }
                        ]
                      },
                      { value: 'photos', id: 48, children: [] }
                    ]
                  }
                ]
              },
              { value: 'Downloads', id: 49, children: [] },
              { value: 'Desktop', id: 50, children: [] },
              { value: 'Pictures', id: 51, children: [] },
              {
                value: 'Music',
                id: 52,
                children: [{ value: "won't be displayed" }],
                loadChildren: callback => {
                  setTimeout(() => {
                    callback([
                      { value: '2Cellos', id: 78, children: [] },
                      { value: 'Michael Jackson', id: 79, children: [] },
                      { value: 'AC/DC', id: 80, children: [] },
                      { value: 'Adel', id: 81, children: [] }
                    ]);
                  }, 5000);
                }
              },
              { value: 'Public', id: 53, children: [] }
            ]
          },
          {
            value: 'secondUser - left menu templates',
            id: 54,
            settings: {
              leftMenu: true
            },
            children: [
              { value: 'Documents', id: 55, children: [] },
              {
                value: 'Downloads - custom left menu template',
                id: 56,
                settings: {
                  templates: {
                    leftMenu: '<i class="fa fa-navicon"></i>'
                  }
                },
                children: [
                  { value: 'Actobat3', id: 57 },
                  { value: 'Complib', id: 58 },
                  { value: 'Eudora', id: 59 },
                  { value: 'java', id: 60 },
                  { value: 'drivers', id: 61 },
                  { value: 'kathy', id: 62 }
                ]
              },
              { value: 'Desktop', id: 63, children: [] },
              { value: 'Pictures', id: 64, children: [] },
              { value: 'Music', id: 65, children: [] },
              { value: 'Public', id: 66, children: [] }
            ]
          }
        ]
      },
      { value: 'lib', id: 67, children: [] },
      { value: 'media', id: 68, children: [] },
      { value: 'opt', id: 69, children: [] },
      { value: 'proc', id: 70, children: [] },
      { value: 'root', id: 71, children: [] },
      { value: 'run', id: 72, children: [] },
      { value: 'sbin', id: 73, children: [] },
      { value: 'srv', id: 74, children: [] },
      { value: 'sys', id: 75, children: [] },
      { value: 'usr', id: 76, children: [] },
      { value: 'var', id: 77, children: [] }
    ]
  };


  updateTreeModel(){
    const arr=[]
    for (let index = 0; index < 700; index++) {
      const element =  { value: 'var', id: Number(`${index}`+1*99), children: [] };
      arr.push(element)
    }
   this.ffs.children[16].children = arr;
   const newArr= [...arr];

   newArr.map(a => a.id = a.id*78);
   this.ffs.children[6].children.push(...newArr);
   this.showTree = true;

  }



  ngOnInit(){
    this.updateTreeModel()
  }

  onNodeSelected(param){
    console.log(param);
  }

}
