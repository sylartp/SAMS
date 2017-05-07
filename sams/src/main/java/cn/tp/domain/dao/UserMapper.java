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
    User findUserByEmail(@Param("email") String email);

    @Insert("insert into user(email,password,name) values(#{email},#{password},#{name})")
    int addUser(User user);

    @Delete("delete from user where email = #{email}")
    int deleteUser(@Param("email") String email);


}