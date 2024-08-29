export interface IUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  profileImage?: string | null;
}
