package cn.tp.domain.dao;

import cn.tp.domain.pojo.User;
import org.apache.commons.lang.StringUtils;
import org.apache.ibatis.jdbc.SQL;

/**
 * Created by tppppp on 2017/5/16.
 */
public class UserProvider {
    public String editUserInfo(final User user) {
        return new SQL() {{
            UPDATE("user");
            if (StringUtils.isNotBlank(user.getName())) {
                SET("name = #{name}");
            }
            if (StringUtils.isNotBlank(user.getIntroduction())) {
                SET("introduction = #{introduction}");
            }
            SET("gender = #{gender}");
            WHERE("email= #{email}");
        }}.toString();
    }

    public String addClub() {
        return new SQL() {{
            UPDATE("user");
            SET("club_id = #{clubId}");
            if(StringUtils.isNotBlank("#{username}")) {
                WHERE("name= #{username}");
            }
        }}.toString();
    }
}
