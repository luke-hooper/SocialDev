import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getPost } from "../../actions/post";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Posts = ({ getPost, post: { posts, loading } }) => {
  useEffect(() => {
    getPost();
  }, [getPost]);
  return <div></div>;
};

Posts.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});
export default connect(mapStateToProps, { getPost })(Posts);
