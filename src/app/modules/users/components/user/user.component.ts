import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { User } from '../../../../services/user.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User | null;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.dir(params);
      const id = parseInt(params.id, 10);
      if (id >= 0) {
        this.user = this.userService.getUser(id);
      }
      if (!this.user) {
        this.user = {
          id: -1,
          name: 'No such user!'
        };
      }
    });
  }

}
