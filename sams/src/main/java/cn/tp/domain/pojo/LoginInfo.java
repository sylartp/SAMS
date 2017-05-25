package cn.tp.domain.pojo;

/**
 * Created by tppppp on 2017/5/13.
 */
public class LoginInfo {
    private boolean flag;
    private String username;

    public LoginInfo() {
    }

    public LoginInfo(boolean flag, String username) {
        this.flag = flag;
        this.username = username;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
