// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { userActionCreators } from "redux/modules/user";
// import { bookActionCreators } from "redux/modules/book";
// import Leave from "./Leave";

// const mapStateToProps = state => ({
//   userId: state.user.userId,
//   takenBooks: state.book
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       getUser: userActionCreators.getUserReq,
//       getBooks: bookActionCreators.allBooksReq
//     },
//     dispatch
//   );

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Leave);