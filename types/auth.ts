export interface LoginRequest {
  email: string;
  password: string;
}

export interface UpdateProfileRequest {
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
  full_name: string;
}

export type ValidationErrorResponse = {
  msg: string;
  status: boolean;
  error_detail: { [key: string]: string[] };
};

export type Notifications = {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: string;
  link: string;
  is_read: string;
  created_at: string;
  updated_at: string;
  meta_data: string;
};

export type User = {
  id: string;
  email: string;
  email_verified_at: string;
  password: string;
  last_login: string;
  full_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

// {
//   "data": {
//       "id": "a4056971-c38f-4aa6-84de-2b43165a4463",
//       "email": "ilhamefo@gmail.com",
//       "email_verified_at": "2024-11-29T02:16:45+07:00",
//       "password": "",
//       "last_login": "2024-12-19T18:38:37.453345+07:00",
//       "full_name": "Patsy Reynolds 😁",
//       "created_at": "2024-11-23T18:32:12.459852+07:00",
//       "updated_at": "2024-12-06T14:09:35.322735+07:00",
//       "deleted_at": null,
//       "roles": null,
//       "permission_lists": null
//   },
//   "msg": "ok",
//   "status": true
// }

// "id": "49d56857-4859-440c-a640-152688f6163f",
// "user_id": "a4056971-c38f-4aa6-84de-2b43165a4463",
// "title": "New Login",
// "message": "You have successfully logged in!",
// "type": "info",
// "link": "",
// "is_read": false,
// "created_at": "10 minutes ago",
// "updated_at": "10 minutes ago",
// "meta_data": null
