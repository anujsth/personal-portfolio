import Avatar from "./avatar/Avatar";
const Form = () => {
  return (
    <div className="flex flex-col">
      <p className="text-5xl text-blue-600 pb-4">About yourself</p>
      <p className="text-gray-500">Fill out your primary information.</p>
      <div className="flex">
        <Avatar
          size="large"
          imageUrl={
            "https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Form;
