type ChatReceiverProps={
  imageURL:string,
  message:string,
  datetime:Date
}

const ChatReceiver = ({imageURL,message,datetime}:ChatReceiverProps) => {
  return (
    <div className="d-flex flex-row justify-content-end">
      <div>
        <p
          className="small p-2 me-3 mb-1 text-white rounded-3"
          style={{ backgroundColor: "#3354a9" }}
        >
          {message}
        </p>
        <p className="small me-3 mb-3 rounded-3 text-muted">
          {datetime.toLocaleDateString()}
        </p>
      </div>
      <img
        src={imageURL}
        alt="avatar 2"
        className="chatReceiverImage"
        style={{ width: "45px", height: "100%" }}
      />
    </div>
  );
};

export default ChatReceiver;
