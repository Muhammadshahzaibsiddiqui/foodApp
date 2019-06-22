import React from "react";
import { MDBContainer, MDBInput, MDBCardHeader, MDBIcon, MDBMedia, MDBBtn, MDBPageItem, MDBPagination, MDBPageNav } from "mdbreact";

const BlogComponentsPage = () => {
  return (
      <MDBContainer>
        <MDBCardHeader className="border-0 font-weight-bold">
          <p className="mr-4 mb-0">Comments</p>
        </MDBCardHeader>
        <MDBMedia className="d-block d-md-flex mt-4">
          <img className="card-img-64 rounded-circle mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="" />
          <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
            <h5 className="font-weight-bold text-default mt-0">
              Miley Steward<MDBIcon icon="reply" className="pull-right ml-2" />
            </h5>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <MDBMedia className="d-block d-md-flex mt-4">
            <img className="card-img-64 rounded-circle mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg" alt="" />
              <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                  <h5 className="font-weight-bold text-default mt-0">
                  Tommy Smith<MDBIcon icon="reply" className="pull-right ml-2" />
                  </h5>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <div className="form-group mt-4">
                    <MDBInput type="textarea" label="Your comment" rows="2" />
                    <div className="text-center my-4">
                      <MDBBtn rounded size="sm">Post</MDBBtn>
                    </div>
                  </div>
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </MDBMedia>
      </MDBContainer>
  );
}

export default BlogComponentsPage;