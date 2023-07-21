pub use crate::error::Error;

pub type Result<T> = std::result::Result<T, Error>;

#[allow(unused)]
pub struct W<T>(pub T);
