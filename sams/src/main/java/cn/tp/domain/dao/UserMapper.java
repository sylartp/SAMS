package cn.tp.domain.dao;

import cn.tp.domain.pojo.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by tppppp on 2017/3/9.
 */
@Mapper
@Repository
public interface UserMapper {

    @Select("select * from user where email = #{email}")
    @Results(id = "userResult1",value = {
            @Result(property = "roleId",column = "role_id"),
            @Result(property = "majorId",column = "major_id"),
            @Result(property = "clubId",column = "club_id")
    })
    User findUserByEmail(@Param("email") String email);

    @Select("select * from user where name = #{name}")
    @Results(id = "userResult2",value = {
            @Result(property = "roleId",column = "role_id"),
            @Result(property = "majorId",column = "major_id"),
            @Result(property = "clubId",column = "club_id")
    })
    User findUserByUsername(@Param("name") String username);

    @Insert("insert into user(email,password,name) values(#{email},#{password},#{name})")
    int addUser(User user);

    @UpdateProvider(type = UserProvider.class,method = "editUserInfo")
    int editUserInfo(User user);

    @UpdateProvider(type = UserProvider.class,method = "addClub")
    int addClub(@Param("clubId") int clubId,@Param("username")String username,@Param("num")int num);

    @Delete("delete from user where email = #{email}")
    int deleteUser(@Param("email") String email);


}