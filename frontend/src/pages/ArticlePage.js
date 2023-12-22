//localhost:3000/articles/learn-node
import { useParams } from "react-router-dom";
import articles from './ArticleContent'
import NotFoundPage from './NotFoundPage';
const ArticlePage = () => {
    //way 1 {/* const params = useParams();
    // const articleId = params.articleId */ }

    //way 2   const params = useParams();
    //        const { articleId } = params;

    //way 3
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);
    
    if(!article) {
        return <NotFoundPage />
    }
    
    return (
        <> {/*react fragment-->empty tag top level element to ignore error */}
        <h1>{article.title}</h1>
            {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
        ))}
        </> 
    );
}

export default ArticlePage;