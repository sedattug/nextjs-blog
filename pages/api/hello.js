export default function handler(req, res) {
    res.status(200).json(
        {
            color: "red",
            value: "#f00"
        }
    );
  }