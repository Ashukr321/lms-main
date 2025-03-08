import { UserResource } from "@clerk/types";

interface IUser {
  user: UserResource;
}
const StudentDashboard = ({ user }: IUser) => {
  return (
    <div className="mt-24">
      <div>Student Dashboard</div>
      <div>User Name: {user.fullName}</div>
    </div>
  );
};

export default StudentDashboard;
