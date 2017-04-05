package cn.tp.domain.dao;

import cn.tp.domain.pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

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
}