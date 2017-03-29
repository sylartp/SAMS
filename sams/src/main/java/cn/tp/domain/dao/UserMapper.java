package cn.tp.domain.dao;

import cn.tp.domain.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * Created by tppppp on 2017/3/9.
 */
@Mapper
public interface UserMapper {

    @Select("select * from user where name = #{email}")
    User findUserByName(@Param("email")String email);


}
