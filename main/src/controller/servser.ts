import express,{Response,Request} from 'express'
import path from 'path'
const app = express();

const root = path.join(__dirname, "../../")
console.log(root)

app.use(express.static(path.join(root, 'build')))

app.get("*", (req: Request, res: Response) => {
  const filePath = path.join(root,'index.html');
  res.sendFile(filePath);
});

app.listen(1111, () => {
  console.log('서버를 열었습니다.');
})