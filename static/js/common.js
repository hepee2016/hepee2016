

function userDel() {
    $.ajax({
        url: '/admin/user/delete',
        type: 'POST',
        data: $('#adminForm').serialize(),
        dataType: 'JSON',
        success: function (data) {
            if (data.status) {
                window.location.reload();
            } else {
                alert(data.info);
            }
        }
    });
}


function setUserUserGroup(uid, gid) {
    $.ajax({
        url: '/admin/user/setusergroup',
        type: 'POST',
        data: {"uid": uid, "gid": gid},
        dataType: 'JSON',
        success: function (data) {
            if (data) {
                window.opener.location.reload();
                window.close();
            } else {
                alert("设置失败");
            }
        }
    });
}


function setUserRole(uid, rid) {
    $.ajax({
        url: '/admin/user/setuserrole',
        type: 'POST',
        data: {"uid": uid, "rid": rid},
        dataType: 'JSON',
        success: function (data) {
            if (data) {
                window.opener.location.reload();
                window.close();
            } else {
                alert("设置失败");
            }
        }
    });
}


jQuery(document).ready(function () {
    var sFeatures = "height=600, width=810, scrollbars=yes, resizable=yes";
    jQuery('a[rel="external"]').click(function () {
        window.open(jQuery(this).attr('href'), '3km', sFeatures);
        return false;
    });
});


function toParent(gtitle, gid) {
    frameElement.api.opener.document.getElementById('gtitle').value = gtitle;
    frameElement.api.opener.document.getElementById('gid').value = gid;
    frameElement.api.close();
}


function appendParent(gtitle, gid) {
    try {
        var ee = frameElement.api.opener.document.getElementsByClassName('small' + gid);
        frameElement.api.opener.document.getElementById('reuser').removeChild(ee);

    } catch (e) {


    }
    frameElement.api.opener.document.getElementById('reuser').innerHTML += "<div class=\"btn btn-default small" + gid + "\"><input name=\"gid\" value=\"" + gid + "\" type=\"hidden\"/><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">× </button><span class=\"label label-important u\">" + gtitle + "</span></div>";
}

function clearParent() {
    if (confirm('清空所有？')) {
        frameElement.api.opener.document.getElementById('gtitle').value = "";
        frameElement.api.opener.document.getElementById('gid').value = "";
    }
}


var flag = false;
function DrawImage(ImgD, iwidth, iheight) {
    //参数(图片,允许的宽度,允许的高度)
    var image = new Image();
    image.src = ImgD.src;
    if (image.width > 0 && image.height > 0) {
        flag = true;
        if (image.width / image.height >= iwidth / iheight) {
            if (image.width > iwidth) {
                ImgD.width = iwidth;
                ImgD.height = (image.height * iwidth) / image.width;
            } else {
                ImgD.width = image.width;
                ImgD.height = image.height;
            }
            ImgD.alt = image.width + "×" + image.height;
        }
        else {
            if (image.height > iheight) {
                ImgD.height = iheight;
                ImgD.width = (image.width * iheight) / image.height;
            } else {
                ImgD.width = image.width;
                ImgD.height = image.height;
            }
            ImgD.alt = image.width + "×" + image.height;
        }
    }
}
