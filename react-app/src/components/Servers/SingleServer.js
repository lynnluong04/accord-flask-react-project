import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { joinServer } from "../../store/servers";

export default function SingleServer() {
  const { serverId } = useParams();
  const server = useSelector(state => state.servers[serverId])
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleJoin = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: user.id,
      server_id: Number(serverId)
    }

    console.log('payload in SingleServer component: ', payload)

    await dispatch(joinServer(payload));
    history.push(`/channels/${server.id}`);
  }

  return (
    <div>
      <h1>{server.name} Server Page</h1>
      <button
        onClick={handleJoin}
      >
        Join
      </button>
    </div>
  );
}