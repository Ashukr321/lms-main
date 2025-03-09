import { UserResource } from "@clerk/types";

interface IUser {
  user: UserResource;
}
const InstructorDashboard = ({ user }: IUser) => {
  return (
    <div className="mt-24">
      <div>Instructor Dashboard</div>
      <div>Instructor Name: {user.fullName}</div>
    </div>
  );
};

export default InstructorDashboard;
