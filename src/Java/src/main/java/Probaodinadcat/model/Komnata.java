package Probaodinadcat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probaodinadcat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Комната
 */
@Entity(name = "IISProbaodinadcatКомната")
@Table(schema = "public", name = "Комната")
public class Komnata {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКомнаты")
    private Integer номеркомнаты;

    @Column(name = "Этаж")
    private Integer этаж;

    @Column(name = "КоличествоМест")
    private Integer количествомест;


    public Komnata() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКомнаты() {
      return номеркомнаты;
    }

    public void setНомерКомнаты(Integer номеркомнаты) {
      this.номеркомнаты = номеркомнаты;
    }

    public Integer getЭтаж() {
      return этаж;
    }

    public void setЭтаж(Integer этаж) {
      this.этаж = этаж;
    }

    public Integer getКоличествоМест() {
      return количествомест;
    }

    public void setКоличествоМест(Integer количествомест) {
      this.количествомест = количествомест;
    }


}