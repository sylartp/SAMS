package cn.tp.domain.pojo;

import java.util.Date;

/**
 * Created by tppppp on 2017/5/15.
 */
public class Club {
    private int id;
    private String name;
    private String content;
    private int presentNum;
    private int maxNum;
    private String image;
    private java.sql.Date createTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getPresentNum() {
        return presentNum;
    }

    public void setPresentNum(int presentNum) {
        this.presentNum = presentNum;
    }

    public int getMaxNum() {
        return maxNum;
    }

    public void setMaxNum(int maxNum) {
        this.maxNum = maxNum;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(java.sql.Date createTime) {
        this.createTime = createTime;
    }
}
