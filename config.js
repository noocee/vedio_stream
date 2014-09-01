/**
 * Created by nodefx on 8/29/14.
 */

exports.Expires = {
    fileMatch: /^(gif|png|jpg|js|css)$/ig,
    maxAge: 60 * 60 * 24 * 365
};

exports.Compress = {
    match:/css|js|html|png/ig
}

exports.Welcome = {
    file: "index.html"
}
