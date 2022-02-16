import {makeStyles} from '@material-ui/core/styles'



export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "red",
    fontFamily:"fantasy"
  },
  image: {
    marginLeft: "15px",
    width: "90px",
    borderRadius: "50%",
    border:"2px solid red"
  },
}));