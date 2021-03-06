import React from "react";
import {CardImg,CardBody,CardTitle,CardText,Card,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';



  function RenderDish({dish}){
        if (dish != null){
              return (
                  <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>);
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}){
        console.log(comments);
        if(comments !=null){
            const commentsHTML = comments.map((comment)=>{
                return (
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                )
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsHTML}
                    </ul>
                </div>);
        }
        else {
            return(<div></div>);
        }
    }

    const DishDetail = (props) => {
        if(props.dish != null){
            return (
                <div class="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-sm-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-sm-5 m-1">
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
                </div>
            );
        }else{
            return <div></div>
        }
    }

export default DishDetail;
