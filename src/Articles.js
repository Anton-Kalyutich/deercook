import Typography from "@mui/material/Typography";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let request = await axios.get(`http://54.166.154.115:8000/articles/`);
        setArticles(request.data);
        console.log(request);
        return request;
      } catch (error) {
        if (error.response) {
          console.error("Error response:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Axios error:", error.message);
        }
        console.error("Axios error config:", error.config);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Typography sx={{ marginLeft: "20px", paddingTop: "20px" }} variant="h6">
        Read About Food
      </Typography>
      <Box
        sx={{
          paddingTop: '20px',
          paddingLeft: '20px',
          paddingBottom: '50px',
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          gap: "20px",
        }}
      >
        {articles.map((article, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 275,
              maxWidth: 275,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                {article.title}
              </Typography>
              <Typography variant="body2">{article.content}</Typography>
            </CardContent>
            <CardActions sx={{ mt: "auto" }}>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Articles;
